'use strict';
const { generate } = require('../../factories/doctors');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const locations = await queryInterface.sequelize.query(
      `SELECT "id" from "Locations";`
    );
    const ids = locations[0].map((l) => l.id);

    await queryInterface.bulkInsert('Doctors', generate(ids, 100), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Doctors', null, {});
  },
};
