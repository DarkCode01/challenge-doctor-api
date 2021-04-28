const { Location } = require('../database/models/index');

module.exports = {
  get: async () => {
    return Location.findAll();
  },
};
