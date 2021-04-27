const request = require('supertest');
const app = require('../app');

describe('Doctor Endpoints', () => {
  it('Get doctors registered', async () => {
    const res = await request(app).get('/doctors');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('result');
  });
});
