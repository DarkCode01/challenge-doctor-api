'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      this.hasMany(models.Doctor, { as: 'doctors' });
      this.hasMany(models.User, { as: 'users' });
    }
  }

  Location.init(
    {
      country: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Location',
    }
  );
  return Location;
};
