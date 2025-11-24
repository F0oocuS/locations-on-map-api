'use strict';

module.exports = (sequelize, DataTypes) => {
	const AdminLevelMapping = sequelize.define('AdminLevelMapping', {
		country_code: {
			type: DataTypes.CHAR(2),
			allowNull: false,
			primaryKey: true
		},
		admin_level: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		unit_kind: {
			type: 'unit_kind',
			allowNull: false
		},
		label_uk: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		label_en: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'admin_level_mapping'
	});

	return AdminLevelMapping;
};