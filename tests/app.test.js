import request from 'supertest';
import app from '../src/App';

test('request', async () => {
    const res = await request(app).get('/');
    if (res.error) {
        throw error;
    }
    expect(res.status).toBe(200);
});
