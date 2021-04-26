'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'location_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Locations',
        key: 'id',
      },
    });
    await queryInterface.addColumn('Doctors', 'location_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Locations',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Doctors', 'location_id');
    await queryInterface.removeColumn('Users', 'location_id');
  },
};
