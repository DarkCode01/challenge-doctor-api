'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Speciality extends Model {
    static associate(models) {
      this.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id',
        as: 'doctor',
      });
    }
  }
  Speciality.init(
    {
      name: DataTypes.STRING,
      date_init: DataTypes.DATE,
      date_finish: DataTypes.DATE,
      doctor_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Speciality',
    }
  );
  return Speciality;
};
