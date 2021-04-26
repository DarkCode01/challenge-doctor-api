'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      this.belongsTo(models.Location, {
        foreignKey: 'location_id',
        as: 'location',
      });

      this.hasMany(models.Speciality, { as: 'specialities' });

      this.hasMany(models.Review, { as: 'reviews' });
    }
  }
  Doctor.init(
    {
      names: DataTypes.STRING,
      years: DataTypes.INTEGER,
      location_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Doctor',
    }
  );
  return Doctor;
};
