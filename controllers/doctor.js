const { Doctor, Review, Appointment } = require('../database/models/index');

module.exports = {
  get: async (filters) => {
    return Doctor.findAndCountAll({
      limit: filters.limit,
      offset: filters.skip,
      include: ['location', 'reviews', 'specialities'],
    });
  },
  getDetails: async (id) => {
    return Doctor.findOne({
      where: { id },
      include: [
        'specialities',
        'location',
        'appointments',
        {
          model: Review,
          as: 'reviews',
          include: ['reviewer'],
        },
      ],
    });
  },
  review: async (id, body) => {
    return Review.create({ doctor_id: id, ...body });
  },
  appointment: async (id, body) => {
    return Appointment.create({ doctor_id: id, ...body });
  },
};
