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
      type: DataTypes.ENUM(
        'country', 'federal_district', 'region',
        'district', 'municipality', 'hromada',
        'settlement', 'city_district', 'microdistrict'
      ),
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