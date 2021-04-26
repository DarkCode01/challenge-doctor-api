'use strict';
const { generate } = require('../../factories/locations');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Locations', generate(26), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
