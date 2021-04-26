'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Specialities', 'doctor_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Doctors',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Specialities', 'doctor_id');
  },
};
