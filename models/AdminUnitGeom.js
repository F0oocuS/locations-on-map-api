'use strict';

module.exports = (sequelize, DataTypes) => {
	const AdminUnitGeom = sequelize.define('AdminUnitGeom', {
		unit_id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false
		},
		geom: {
			type: 'geometry(MultiPolygon, 4326)',
			allowNull: false
		}
	}, {
		tableName: 'admin_unit_geom',
		timestamps: false,
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