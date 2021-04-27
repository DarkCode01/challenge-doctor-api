'use strict';
const { generate } = require('../../factories/specialities');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const doctors = await queryInterface.sequelize.query(
      `SELECT "id" from "Doctors";`
    );
    const ids = doctors[0].map((l) => l.id);

    await queryInterface.bulkInsert('Specialities', generate(ids, 100), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Specialities', null, {});
  },
};
