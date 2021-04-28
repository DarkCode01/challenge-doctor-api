'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      this.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id',
        as: 'doctor',
      });

      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'pacient',
      });
    }
  }
  Appointment.init(
    {
      doctor_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      name: DataTypes.TEXT,
      date: DataTypes.DATE,
      type: {
        type: DataTypes.ENUM('virtual', 'presencial'),
        defaultValue: 'virtual',
      },
    },
    {
      sequelize,
      modelName: 'Appointment',
    }
  );
  return Appointment;
};
