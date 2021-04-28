'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Location, {
        foreignKey: 'location_id',
        as: 'location',
      });

      this.hasMany(models.Review, { as: 'reviews', foreignKey: 'user_id' });
      this.hasMany(models.Appointment, {
        as: 'appointments',
        foreignKey: 'user_id',
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
