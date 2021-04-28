'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.Doctor, {
        foreignKey: 'doctor_id',
        as: 'doctor',
      });

      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'reviewer',
      });
    }
  }
  Review.init(
    {
      doctor_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      starts: DataTypes.FLOAT,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
