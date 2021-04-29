const {
  Doctor,
  Review,
  Appointment,
  User,
} = require('../database/models/index');
const { Op } = require('sequelize');

module.exports = {
  get: async (filters) => {
    return Doctor.findAndCountAll({
      where: {
        names: { [Op.like]: `%${filters.q}%` },
      },
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
    return Review.create({ doctor_id: id, ...body }, { include: ['reviewer'] });
  },
  appointment: async (id, body) => {
    return Appointment.create(
      { doctor_id: id, ...body },
      { include: ['pacient'] }
    );
  },
};
