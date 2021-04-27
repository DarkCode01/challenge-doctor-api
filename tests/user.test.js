const request = require('supertest');
const app = require('../app');
const models = require('../database/models/index');
const { location } = require('../factories/locations');

describe('User Endpoints', () => {
  let entity = {};

  beforeAll(async () => {
    entity = await models.Location.create(location());
  });

  it('create a new user', async () => {
    const res = await request(app).post('/api/users').send({
      names: 'jose segura',
      location_id: entity.id,
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('result');
  });
});
