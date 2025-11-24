'use strict';

module.exports = (sequelize, DataTypes) => {
	const AdminUnit = sequelize.define('AdminUnit', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		country_code: {
			type: DataTypes.CHAR(2),
			allowNull: false
		},
		unit_kind: {
			type: DataTypes.ENUM(
				'country', 'federal_district', 'region',
				'district', 'municipality', 'hromada',
				'settlement', 'city_district', 'microdistrict'
			),
			allowNull: false
		},
		admin_level: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		osm_type: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		osm_id: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		code: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		valid_from: {
			type: DataTypes.DATE,
			allowNull: true
		},
		valid_to: {
			type: DataTypes.DATE,
			allowNull: true
		},
		meta: {
			type: DataTypes.JSONB,
			defaultValue: {}
		}
	}, {
		tableName: 'admin_unit',
		indexes: [
			{
				unique: true,
				fields: ['country_code', 'osm_type', 'osm_id'],
				name: 'admin_unit_osm_uidx',
				where: {
					osm_id: {
						[sequelize.Sequelize.Op.ne]: null
					}
				}
			}
		]
	});

	AdminUnit.associate = function (models) {
		AdminUnit.hasMany(models.AdminUnitName, {
			foreignKey: 'unit_id',
			as: 'names',
			onDelete: 'CASCADE'
		});

		AdminUnit.hasOne(models.AdminUnitGeom, {
			foreignKey: 'unit_id',
			as: 'geometry',
			onDelete: 'CASCADE'
		});

		AdminUnit.belongsToMany(models.AdminUnit, {
			through: models.AdminUnitEdge,
			as: 'children',
			foreignKey: 'parent_id',
			otherKey: 'child_id'
		});

		AdminUnit.belongsToMany(models.AdminUnit, {
			through: models.AdminUnitEdge,
			as: 'parents',
			foreignKey: 'child_id',
			otherKey: 'parent_id'
		});
	};

	return AdminUnit;
};