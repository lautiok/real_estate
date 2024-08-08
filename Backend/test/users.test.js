import request from 'supertest';
import app from '../src/app.js';

describe('User Routes', () => {
  it('should get all users', async () => {
    const response = await request(app).get('/api/auth/users');
    expect(response.status).toBe(401);
    expect(response.body.length).toBeGreaterThan(0);
  });

});
