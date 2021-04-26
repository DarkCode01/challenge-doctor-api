const faker = require('faker');

const location = () => ({
  country: faker.address.country(),
  state: faker.address.state(),
  createdAt: new Date(),
  updatedAt: new Date(),
});

module.exports = {
  generate: (count) => {
    let locations = [];

    for (let i = 0; i <= count; i++) {
      locations.push(location());
    }

    return locations;
  },
};
