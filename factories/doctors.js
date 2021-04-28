const faker = require('faker');

const doctor = (locations) => ({
  names: faker.name.findName(),
  years: faker.datatype.number(100),
  location_id: faker.random.arrayElement(locations),
  createdAt: new Date(),
  updatedAt: new Date(),
});

module.exports = {
  doctor,
  generate: (locations, count) => {
    let doctors = [];

    for (let i = 0; i < count; i++) {
      doctors.push(doctor(locations));
    }

    return doctors;
  },
};
