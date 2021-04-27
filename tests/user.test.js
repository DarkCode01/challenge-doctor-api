const request = require('supertest');
const app = require('../app');

describe('User Endpoints', () => {
  it('create a new user', async () => {
    const res = await request(app).post('/users').send({
      names: 'jose segura',
      location_id: 10,
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('result');
  });
});
