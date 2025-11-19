'use strict';

module.exports = (sequelize, DataTypes) => {
  const AdminUnitName = sequelize.define('AdminUnitName', {
    unit_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    lang: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    is_official: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_short: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    alt_names: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: []
    }
  }, {
    tableName: 'admin_unit_name',
    indexes: [
      {
        fields: ['name'],
        using: 'gin',
        operator: 'gin_trgm_ops',
        name: 'admin_unit_name_trgm'
      }
    ]
  });

  AdminUnitName.associate = function(models) {
    AdminUnitName.belongsTo(models.AdminUnit, {
      foreignKey: 'unit_id',
      as: 'unit',
      onDelete: 'CASCADE'
    });
  };

  return AdminUnitName;
};