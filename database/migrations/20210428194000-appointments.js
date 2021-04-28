'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Appointments', 'doctor_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Doctors',
        key: 'id',
      },
    });
    await queryInterface.addColumn('Appointments', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Appointments', 'doctor_id');
    await queryInterface.removeColumn('Appointments', 'user_id');
  },
};
