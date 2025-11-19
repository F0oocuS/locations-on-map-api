'use strict';

module.exports = (sequelize, DataTypes) => {
  const AdminUnitEdge = sequelize.define('AdminUnitEdge', {
    parent_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    child_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'admin_unit_edge',
    indexes: [
      {
        fields: ['child_id'],
        name: 'admin_unit_edge_child_idx'
      }
    ]
  });

  AdminUnitEdge.associate = function(models) {
    AdminUnitEdge.belongsTo(models.AdminUnit, {
      foreignKey: 'parent_id',
      as: 'parent',
      onDelete: 'CASCADE'
    });

    AdminUnitEdge.belongsTo(models.AdminUnit, {
      foreignKey: 'child_id',
      as: 'child',
      onDelete: 'CASCADE'
    });
  };

  return AdminUnitEdge;
};