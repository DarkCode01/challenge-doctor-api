'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Speciality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Speciality.init(
    {
      name: DataTypes.STRING,
      date_init: DataTypes.DATE,
      date_finish: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Speciality',
    }
  );
  return Speciality;
};
