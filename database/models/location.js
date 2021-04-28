'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      this.hasMany(models.Doctor, { as: 'doctors', foreignKey: 'location_id' });
      this.hasMany(models.User, { as: 'users', foreignKey: 'location_id' });
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
