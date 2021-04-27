const faker = require('faker');

const speciality = (doctors) => ({
  doctor_id: faker.random.arrayElement(doctors),
  name: faker.lorem.words(2),
  date_init: faker.datatype.datetime(),
  date_finish: faker.datatype.datetime(),
  createdAt: new Date(),
  updatedAt: new Date(),
});

module.exports = {
  generate: (doctors, count) => {
    let specialities = [];

    for (let i = 0; i <= count; i++) {
      specialities.push(speciality(doctors));
    }

    return specialities;
  },
};
