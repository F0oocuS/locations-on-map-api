'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// Create ENUM type for unit_kind
		await queryInterface.sequelize.query(`
      CREATE TYPE unit_kind AS ENUM (
        'country', 'federal_district', 'region',
        'district', 'municipality', 'hromada',
        'settlement', 'city_district', 'microdistrict'
      );
    `);

		// Create admin_unit table
		await queryInterface.createTable('admin_unit', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				defaultValue: Sequelize.literal('gen_random_uuid()')
			},
			country_code: {
				type: Sequelize.CHAR(2),
				allowNull: false
			},
			unit_kind: {
				type: 'unit_kind',
				allowNull: false
			},
			admin_level: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			osm_type: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			osm_id: {
				type: Sequelize.BIGINT,
				allowNull: true
			},
			code: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			valid_from: {
				type: 'TIMESTAMPTZ',
				allowNull: true
			},
			valid_to: {
				type: 'TIMESTAMPTZ',
				allowNull: true
			},
			meta: {
				type: Sequelize.JSONB,
				defaultValue: {}
			}
		});

		// Create unique index for admin_unit
		await queryInterface.addIndex('admin_unit', {
			fields: ['country_code', 'osm_type', 'osm_id'],
			unique: true,
			name: 'admin_unit_osm_uidx',
			where: {
				osm_id: {
					[Sequelize.Op.ne]: null
				}
			}
		});

		// Create admin_unit_name table
		await queryInterface.createTable('admin_unit_name', {
			unit_id: {
				type: Sequelize.UUID,
				references: {
					model: 'admin_unit',
					key: 'id'
				},
				onDelete: 'CASCADE',
				allowNull: false
			},
			lang: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			name: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			is_official: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			is_short: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			alt_names: {
				type: Sequelize.ARRAY(Sequelize.TEXT),
				defaultValue: []
			}
		});

		// Add composite primary key for admin_unit_name
		await queryInterface.addConstraint('admin_unit_name', {
			fields: ['unit_id', 'lang', 'name'],
			type: 'primary key',
			name: 'admin_unit_name_pkey'
		});

		// Create trigram index for name search (requires pg_trgm extension)
		await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS pg_trgm;');
		await queryInterface.sequelize.query(`
            CREATE INDEX admin_unit_name_trgm
                ON admin_unit_name USING gin(name gin_trgm_ops);
		`);

		// Create admin_unit_geom table
		await queryInterface.createTable('admin_unit_geom', {
			unit_id: {
				type: Sequelize.UUID,
				primaryKey: true,
				references: {
					model: 'admin_unit',
					key: 'id'
				},
				onDelete: 'CASCADE'
			},
			geom: {
				type: 'geometry(MultiPolygon, 4326)',
				allowNull: false
			}
		});

		// Add generated columns for centroid, bbox, lat, lon
		await queryInterface.sequelize.query(`
            ALTER TABLE admin_unit_geom
                ADD COLUMN centroid geometry(Point, 4326)
        GENERATED ALWAYS AS (ST_Centroid(geom)) STORED;
		`);

		await queryInterface.sequelize.query(`
            ALTER TABLE admin_unit_geom
                ADD COLUMN bbox geometry(Polygon, 4326)
        GENERATED ALWAYS AS (ST_Envelope(geom)) STORED;
		`);

		await queryInterface.sequelize.query(`
            ALTER TABLE admin_unit_geom
                ADD COLUMN lat double precision
                    GENERATED ALWAYS AS (ST_Y(ST_Centroid(geom))) STORED;
		`);

		await queryInterface.sequelize.query(`
            ALTER TABLE admin_unit_geom
                ADD COLUMN lon double precision
                    GENERATED ALWAYS AS (ST_X(ST_Centroid(geom))) STORED;
		`);

		// Create spatial index
		await queryInterface.sequelize.query(`
            CREATE INDEX admin_unit_geom_gix
                ON admin_unit_geom USING gist(geom);
		`);

		// Create admin_unit_edge table
		await queryInterface.createTable('admin_unit_edge', {
			parent_id: {
				type: Sequelize.UUID,
				references: {
					model: 'admin_unit',
					key: 'id'
				},
				onDelete: 'CASCADE',
				allowNull: false
			},
			child_id: {
				type: Sequelize.UUID,
				references: {
					model: 'admin_unit',
					key: 'id'
				},
				onDelete: 'CASCADE',
				allowNull: false
			}
		});

		// Add composite primary key for admin_unit_edge
		await queryInterface.addConstraint('admin_unit_edge', {
			fields: ['parent_id', 'child_id'],
			type: 'primary key',
			name: 'admin_unit_edge_pkey'
		});

		// Create index on child_id
		await queryInterface.addIndex('admin_unit_edge', {
			fields: ['child_id'],
			name: 'admin_unit_edge_child_idx'
		});

		// Create admin_level_mapping table
		await queryInterface.createTable('admin_level_mapping', {
			country_code: {
				type: Sequelize.CHAR(2),
				allowNull: false
			},
			admin_level: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			unit_kind: {
				type: 'unit_kind',
				allowNull: false
			},
			label_uk: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			label_en: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			notes: {
				type: Sequelize.TEXT,
				allowNull: true
			}
		});

		// Add composite primary key for admin_level_mapping
		await queryInterface.addConstraint('admin_level_mapping', {
			fields: ['country_code', 'admin_level'],
			type: 'primary key',
			name: 'admin_level_mapping_pkey'
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('admin_level_mapping');
		await queryInterface.dropTable('admin_unit_edge');
		await queryInterface.dropTable('admin_unit_geom');
		await queryInterface.dropTable('admin_unit_name');
		await queryInterface.dropTable('admin_unit');

		// Drop ENUM type
		await queryInterface.sequelize.query('DROP TYPE IF EXISTS unit_kind;');

		// Drop extension
		await queryInterface.sequelize.query('DROP EXTENSION IF EXISTS pg_trgm;');
	}
};
