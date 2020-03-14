import 'core-js/stable';
import 'regenerator-runtime/runtime';

const request = require('supertest');
const app = require('../server');


describe('GET Location endpoint', () => {
  it('should return an oboject', async () => {
    const res = await request(app).get('/get-location');

    expect(res.statusCode).toEqual(200);
    expect(typeof res.body).toBe('object');
  });
});
