const request = require('supertest');
const app = require('../app');
const models = require('../database/models/index');
const { location } = require('../factories/locations');
const { doctor } = require('../factories/doctors');

describe('Doctor Endpoints', () => {
  locationEntity = {};
  doctorEntity = {};
  userEntity = {};

  beforeAll(async () => {
    locationEntity = await models.Location.create(location);
    doctorEntity = await models.Doctor.create({
      ...doctor([locationEntity.id]),
    });
    userEntity = await models.User.create({
      names: 'testing',
      location_id: locationEntity.id,
    });
  });

  it('Get doctors registered', async () => {
    const res = await request(app).get('/api/doctors');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('result');
  });

  it('Get doctors details', async () => {
    const res = await request(app).get(`/api/doctors/${doctorEntity.id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('result');
  });

  it('Create review by user', async () => {
    const res = await (
      await request(app).post(`/api/doctors/${doctorEntity.id}/review`)
    ).send({
      user_id: userEntity.id,
      starts: 3,
      comment: 'simple comment :D!',
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('result');
  });
});
