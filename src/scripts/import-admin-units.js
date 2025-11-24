const https = require('https');
const fs = require('fs');
const path = require('path');

// Отримуємо параметри з аргументів командного рядка
// Використання: node fetch-kyiv-boundaries.js <countrycode> <admin_level>
// Приклад: node fetch-kyiv-boundaries.js UA 10
const COUNTRY_CODE = process.argv[2] || 'UA';
const ADMIN_LEVEL = process.argv[3] || 10;

// Overpass API запит для отримання адміністративних одиниць країни
// Використовуємо ISO код країни для пошуку area
const overpassQuery = `
[out:json][timeout:180];
area["ISO3166-1"="UA"][admin_level=2]->.country;
rel(area.country)
  ["boundary"="administrative"]
  ["admin_level"="10"];
out ids tags bb;
out geom qt; 
`;

// URL Overpass API
const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

function fetchOverpassData() {
    console.log('Починаємо запит до Overpass API...');
    console.log(`Країна: ${COUNTRY_CODE}, рівень адміністративних одиниць: ${ADMIN_LEVEL}`);

    const postData = `data=${encodeURIComponent(overpassQuery)}`;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = https.request(OVERPASS_URL, options, (res) => {
        let data = '';

        console.log(`Статус відповіді: ${res.statusCode}`);

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const jsonData = JSON.parse(data);

                console.log(`\nОтримано ${jsonData.elements.length} адміністративних одиниць`);

                // Обробка даних
                const boundaries = jsonData.elements.map(element => {
                    const tags = element.tags || {};

                    // Отримуємо геометрію (координати меж)
                    const geometry = element.members
                        ? element.members
                            .filter(m => m.type === 'way' && m.geometry)
                            .map(m => m.geometry.map(point => [point.lat, point.lon]))
                        : [];

                    return {
                        id: element.id,
                        name: tags.name || tags['name:uk'] || 'Без назви',
                        nameEn: tags['name:en'] || '',
                        adminLevel: tags.admin_level,
                        type: element.type,
                        tags: tags,
                        geometry: geometry
                    };
                });

                // Виводимо список знайдених районів
                console.log('\nЗнайдені адміністративні одиниці:');
                boundaries.forEach((boundary, index) => {
                    console.log(`${index + 1}. ${boundary.name} (ID: ${boundary.id})`);
                });

                // Зберігаємо у файл
                const outputPath = path.join(__dirname, `../../boundaries-${COUNTRY_CODE}-${ADMIN_LEVEL}.json`);
                fs.writeFileSync(outputPath, JSON.stringify(boundaries, null, 2));
                console.log(`\nДані збережено у файл: ${outputPath}`);

                // Зберігаємо також сирі дані від Overpass API
                const rawOutputPath = path.join(__dirname, `../../boundaries-${COUNTRY_CODE}-${ADMIN_LEVEL}-raw.json`);
                fs.writeFileSync(rawOutputPath, JSON.stringify(jsonData, null, 2));
                console.log(`Сирі дані збережено у файл: ${rawOutputPath}`);

            } catch (error) {
                console.error('Помилка при обробці даних:', error.message);
                console.error('Отримані дані:', data.substring(0, 500));
            }
        });
    });

    req.on('error', (error) => {
        console.error('Помилка при запиті до Overpass API:', error.message);
    });

    req.write(postData);
    req.end();
}

// Запускаємо скрипт
console.log(`=== Завантаження адміністративних одиниць (${COUNTRY_CODE}, рівень ${ADMIN_LEVEL}) ===\n`);
fetchOverpassData();
