const https = require('https');
const fs = require('fs');
const path = require('path');
const db = require('../../models');

// CLI параметри
const COUNTRY_CODE = process.argv[2] || 'UA';
const ADMIN_LEVEL = process.argv[3] || 10;

// URL Overpass API
const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

// Статистика імпорту
const stats = {
    inserted: 0,
    updated: 0,
    orphans: 0,
    edgesBuilt: 0,
    warnings: [],
    errors: []
};

// Логування
const logger = {
    info: (message) => {
        console.log(`[INFO] ${message}`);
    },
    warn: (message) => {
        console.warn(`[WARN] ${message}`);
        stats.warnings.push(message);
    },
    error: (message, error) => {
        console.error(`[ERROR] ${message}`, error || '');
        stats.errors.push({ message, error: error?.message || error });
    }
};

// Динамічний Overpass запит
function buildOverpassQuery(countryCode, adminLevel) {
    return `
[out:json][timeout:180];
area["ISO3166-1"="${countryCode}"][admin_level=2]->.country;
rel(area.country)
  ["boundary"="administrative"]
  ["admin_level"="${adminLevel}"];
out ids tags bb;
out geom qt;
`;
}

// Збереження raw відповіді в logs
function saveRawResponse(data, countryCode, adminLevel) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `overpass-${countryCode}-${adminLevel}-${timestamp}.json`;
    const filepath = path.join(__dirname, '../../logs', filename);

    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
    logger.info(`Raw відповідь збережено: ${filepath}`);
    return filepath;
}

// Валідація та фільтрація елементів
function validateAndFilterElements(elements) {
    const valid = [];

    for (const element of elements) {
        const tags = element.tags || {};

        // Перевірка boundary=administrative
        if (tags.boundary !== 'administrative') {
            logger.warn(`Пропущено елемент ${element.id}: відсутній boundary=administrative`);
            continue;
        }

        // Перевірка наявності геометрії
        if (!element.members || element.members.length === 0) {
            logger.warn(`Пропущено елемент ${element.id}: відсутня геометрія`);
            continue;
        }

        // Перевірка наявності назви
        if (!tags.name && !tags['name:uk'] && !tags['name:en']) {
            logger.warn(`Елемент ${element.id} не має назви`);
        }

        valid.push(element);
    }

    return valid;
}

// Конвертація геометрії OSM в GeoJSON
function convertOsmToGeoJSON(element) {
    try {
        const ways = element.members
            .filter(m => m.type === 'way' && m.geometry)
            .map(m => m.geometry.map(point => [point.lon, point.lat]));

        if (ways.length === 0) {
            return null;
        }

        // Створюємо MultiPolygon GeoJSON
        const polygons = ways.map(ring => [ring]);

        return {
            type: 'MultiPolygon',
            coordinates: polygons
        };
    } catch (error) {
        logger.error(`Помилка конвертації геометрії для ${element.id}`, error);
        return null;
    }
}

// Отримання unit_kind з AdminLevelMapping
async function getUnitKind(countryCode, adminLevel) {
    try {
        const mapping = await db.AdminLevelMapping.findOne({
            where: {
                country_code: countryCode,
                admin_level: parseInt(adminLevel)
            }
        });

        if (!mapping) {
            logger.warn(`Відсутній mapping для ${countryCode}:${adminLevel}`);
            return null;
        }

        return mapping.unit_kind;
    } catch (error) {
        logger.error(`Помилка отримання unit_kind`, error);
        return null;
    }
}

// Збереження admin_unit (Upsert)
async function saveAdminUnit(element, countryCode, adminLevel, unitKind, transaction) {
    try {
        const tags = element.tags || {};

        // Спочатку спробуємо знайти існуючий запис
        let adminUnit = await db.AdminUnit.findOne({
            where: {
                country_code: countryCode,
                osm_type: element.type,
                osm_id: element.id
            },
            transaction
        });

        let created = false;

        if (adminUnit) {
            // Оновлюємо існуючий
            await adminUnit.update({
                unit_kind: unitKind,
                admin_level: parseInt(adminLevel),
                meta: tags
            }, { transaction });
        } else {
            // Створюємо новий
            adminUnit = await db.AdminUnit.create({
                country_code: countryCode,
                unit_kind: unitKind,
                admin_level: parseInt(adminLevel),
                osm_type: element.type,
                osm_id: element.id,
                meta: tags
            }, { transaction });
            created = true;
        }

        if (created) {
            stats.inserted++;
            logger.info(`Вставлено: ${tags.name || tags['name:uk'] || element.id}`);
        } else {
            stats.updated++;
            logger.info(`Оновлено: ${tags.name || tags['name:uk'] || element.id}`);
        }

        return adminUnit;
    } catch (error) {
        logger.error(`Помилка збереження admin_unit ${element.id}`, error);
        throw error;
    }
}

// Збереження багатомовних назв
async function saveAdminUnitNames(unitId, tags, transaction) {
    try {
        // Видаляємо старі назви
        await db.AdminUnitName.destroy({
            where: { unit_id: unitId },
            transaction
        });

        const names = [];

        // Збираємо всі name:* теги
        for (const [key, value] of Object.entries(tags)) {
            if (key === 'name') {
                // Основна назва (мова залежить від країни)
                names.push({
                    unit_id: unitId,
                    lang: 'default',
                    name: value,
                    is_official: true,
                    is_short: false,
                    alt_names: []
                });
            } else if (key.startsWith('name:')) {
                const lang = key.split(':')[1];
                names.push({
                    unit_id: unitId,
                    lang: lang,
                    name: value,
                    is_official: lang === 'uk' || lang === 'en',
                    is_short: false,
                    alt_names: []
                });
            }
        }

        if (names.length > 0) {
            await db.AdminUnitName.bulkCreate(names, { transaction });
        }

        return names.length;
    } catch (error) {
        logger.error(`Помилка збереження назв для unit ${unitId}`, error);
        throw error;
    }
}

// Збереження геометрії
async function saveAdminUnitGeometry(unitId, geojson, transaction) {
    try {
        if (!geojson) {
            logger.warn(`Пропущено геометрію для unit ${unitId}: невалідний GeoJSON`);
            return;
        }

        // Використовуємо PostGIS функції для валідації та конвертації
        const geojsonString = JSON.stringify(geojson);

        await db.sequelize.query(`
            INSERT INTO admin_unit_geom (unit_id, geom)
            VALUES (
                :unitId,
                ST_Multi(
                    ST_ForcePolygonCCW(
                        ST_MakeValid(
                            ST_SetSRID(ST_GeomFromGeoJSON(:geojson), 4326)
                        )
                    )
                )
            )
            ON CONFLICT (unit_id) DO UPDATE
            SET geom = ST_Multi(
                ST_ForcePolygonCCW(
                    ST_MakeValid(
                        ST_SetSRID(ST_GeomFromGeoJSON(:geojson), 4326)
                    )
                )
            )
        `, {
            replacements: { unitId, geojson: geojsonString },
            transaction
        });

    } catch (error) {
        logger.error(`Помилка збереження геометрії для unit ${unitId}`, error);
        throw error;
    }
}

// Побудова ієрархії (визначення батьків)
async function buildHierarchy(unitId, countryCode, adminLevel, transaction) {
    try {
        // Знаходимо потенційних батьків через ST_Contains
        const [parents] = await db.sequelize.query(`
            SELECT
                au.id,
                au.admin_level,
                ST_Area(aug.geom) as area
            FROM admin_unit au
            JOIN admin_unit_geom aug ON au.id = aug.unit_id
            JOIN admin_unit_geom child_geom ON child_geom.unit_id = :unitId
            WHERE
                au.country_code = :countryCode
                AND au.admin_level < :adminLevel
                AND ST_Contains(aug.geom, child_geom.geom)
            ORDER BY ST_Area(aug.geom) ASC
            LIMIT 1
        `, {
            replacements: {
                unitId,
                countryCode,
                adminLevel: parseInt(adminLevel)
            },
            transaction
        });

        if (parents && parents.length > 0) {
            const parentId = parents[0].id;

            // Вставляємо зв'язок
            await db.sequelize.query(`
                INSERT INTO admin_unit_edge (parent_id, child_id)
                VALUES (:parentId, :childId)
                ON CONFLICT (parent_id, child_id) DO NOTHING
            `, {
                replacements: { parentId, childId: unitId },
                transaction
            });

            stats.edgesBuilt++;
            return parentId;
        } else {
            logger.warn(`Не знайдено батька для unit ${unitId}`);
            stats.orphans++;
            return null;
        }
    } catch (error) {
        logger.error(`Помилка побудови ієрархії для unit ${unitId}`, error);
        return null;
    }
}

// Основна функція обробки даних
async function processElements(elements, countryCode, adminLevel) {
    const unitKind = await getUnitKind(countryCode, adminLevel);

    logger.info(`unit_kind для ${countryCode}:${adminLevel} = ${unitKind}`);

    if (!unitKind) {
        logger.error(`Відсутній mapping для ${countryCode}:${adminLevel}. Імпорт неможливий.`);
        return;
    }

    for (const element of elements) {
        // Використовуємо окрему транзакцію для кожного елемента
        const transaction = await db.sequelize.transaction();

        try {
            // 1. Зберігаємо admin_unit
            const adminUnit = await saveAdminUnit(
                element,
                countryCode,
                adminLevel,
                unitKind,
                transaction
            );

            const unitId = adminUnit.id;

            // 2. Зберігаємо назви
            await saveAdminUnitNames(unitId, element.tags || {}, transaction);

            // 3. Конвертуємо та зберігаємо геометрію
            const geojson = convertOsmToGeoJSON(element);
            await saveAdminUnitGeometry(unitId, geojson, transaction);

            // 4. Будуємо ієрархію
            await buildHierarchy(unitId, countryCode, adminLevel, transaction);

            await transaction.commit();

        } catch (error) {
            await transaction.rollback();
            logger.error(`Помилка обробки елемента ${element.id}`, error);
            // Продовжуємо обробку інших елементів
        }
    }

    logger.info('Обробка елементів завершена');
}

// Запит до Overpass API
function fetchOverpassData() {
    logger.info('=== Початок імпорту адміністративних одиниць ===');
    logger.info(`Країна: ${COUNTRY_CODE}, Рівень: ${ADMIN_LEVEL}`);

    const query = buildOverpassQuery(COUNTRY_CODE, ADMIN_LEVEL);
    const postData = `data=${encodeURIComponent(query)}`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = https.request(OVERPASS_URL, options, (res) => {
        let data = '';

        logger.info(`Статус відповіді: ${res.statusCode}`);

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', async () => {
            try {
                const jsonData = JSON.parse(data);

                logger.info(`Отримано ${jsonData.elements.length} об'єктів`);

                // Зберігаємо raw відповідь
                saveRawResponse(jsonData, COUNTRY_CODE, ADMIN_LEVEL);

                // Валідація та фільтрація
                const validElements = validateAndFilterElements(jsonData.elements);
                logger.info(`Валідних об'єктів: ${validElements.length}`);

                // Підключаємося до БД
                await db.sequelize.authenticate();
                logger.info('Підключено до бази даних');

                // Обробка елементів
                await processElements(validElements, COUNTRY_CODE, ADMIN_LEVEL);

                // Виводимо звіт
                logger.info('\n=== ЗВІТ ПРО ІМПОРТ ===');
                logger.info(`Вставлено: ${stats.inserted}`);
                logger.info(`Оновлено: ${stats.updated}`);
                logger.info(`Orphans: ${stats.orphans}`);
                logger.info(`Зв'язків побудовано: ${stats.edgesBuilt}`);
                logger.info(`Попереджень: ${stats.warnings.length}`);
                logger.info(`Помилок: ${stats.errors.length}`);

                // Зберігаємо звіт
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                const reportPath = path.join(__dirname, '../../logs', `report-${COUNTRY_CODE}-${ADMIN_LEVEL}-${timestamp}.json`);
                fs.writeFileSync(reportPath, JSON.stringify(stats, null, 2));
                logger.info(`\nЗвіт збережено: ${reportPath}`);

                // Закриваємо підключення
                await db.sequelize.close();
                logger.info('\n=== Імпорт завершено ===');

            } catch (error) {
                logger.error('Помилка при обробці даних', error);
                process.exit(1);
            }
        });
    });

    req.on('error', (error) => {
        logger.error('Помилка при запиті до Overpass API', error);
        process.exit(1);
    });

    req.write(postData);
    req.end();
}

// Запуск скрипта
fetchOverpassData();
