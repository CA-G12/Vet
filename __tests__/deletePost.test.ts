import { describe, expect, test } from '@jest/globals';
import app from '../src/app';
import supertest from 'supertest';
import build from '../src/db/build';
import sequelize from '../src/db/connection';

let token = '';
beforeAll(() => build());
beforeEach(async () => {
  const response = await supertest(app).post('/api/v1/signin').send({
    email: 'saeed@gmail.com',
    password: '123456',
  });
  token = response.body.data.token;
});
describe('delete a post', () => {
  test('delete a post successfully', done => {
    supertest(app)
      .delete('/api/v1/post/6')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(200);
        expect(res.body.msg).toBe('post deleted successfully');
        return done();
      });
  });
  test('delete a post successfully', done => {
    supertest(app)
      .delete('/api/v1/post/1')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(400);
        expect(res.body.msg).toBe('you cannot delete this post');
        return done();
      });
  });
  test("delete a post that doesn't exist, should be rejected", done => {
    supertest(app)
      .delete('/api/v1/post/20')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(400);
        expect(res.body.msg).toBe('you cannot delete this post');
        return done();
      });
  });
});
afterAll(() => sequelize.close());
