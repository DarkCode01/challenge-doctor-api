const { Doctor, Review } = require('../database/models/index');

module.exports = {
  create: async (body) => {
    return Doctor.create(body);
  },
  get: async (filters) => {
    return Doctor.findAll({
      include: ['location', 'reviews'],
    });
  },
  getDetails: async (id) => {
    return Doctor.findOne({ id });
  },
  review: async (id, body) => {
    return Review.create({ doctor_id: id, ...body });
  },
};
