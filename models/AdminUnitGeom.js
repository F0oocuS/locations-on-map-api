'use strict';

module.exports = (sequelize, DataTypes) => {
	const AdminUnitGeom = sequelize.define('AdminUnitGeom', {
		unit_id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false
		},
		geom: {
			type: DataTypes.GEOMETRY('MultiPolygon', 4326),
			allowNull: false
		},
		centroid: {
			type: DataTypes.GEOMETRY('Point', 4326),
			allowNull: true
		},
		bbox: {
			type: DataTypes.GEOMETRY('Polygon', 4326),
			allowNull: true
		},
		lat: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		lon: {
			type: DataTypes.DOUBLE,
			allowNull: true
		}
	}, {
		tableName: 'admin_unit_geom',
		indexes: [
			{
				fields: ['geom'],
				using: 'gist',
				name: 'admin_unit_geom_gix'
			}
		]
	});

	AdminUnitGeom.associate = function (models) {
		AdminUnitGeom.belongsTo(models.AdminUnit, {
			foreignKey: 'unit_id',
			as: 'unit',
			onDelete: 'CASCADE'
		});
	};

	return AdminUnitGeom;
};