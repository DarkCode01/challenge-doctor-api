const { User } = require('../database/models/index');

module.exports = {
  create: async (body) => {
    return User.create(body);
  },
};
