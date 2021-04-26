'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Location, {
        foreignKey: 'location_id',
        as: 'location',
      });
    }
  }
  User.init(
    {
      names: DataTypes.STRING,
      location_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
