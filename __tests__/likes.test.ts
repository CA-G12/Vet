import { describe, expect, test } from '@jest/globals';
import app from '../src/app';
import supertest from 'supertest';
import build from '../src/db/build';
import sequelize from '../src/db/connection';
let token = '';
beforeAll(() => build());
beforeEach(async () => {
  const response = await supertest(app).post('/api/v1/sign-in').send({
    email: 'saeed@gmail.com',
    password: '123456',
  });
  token = response.body.data.token;
});
describe('like a post', () => {
  test('like a post from an authorized account, should be successful', done => {
    supertest(app)
      .post('/api/v1/likes')
      .set('Authorization', `Bearer ${token}`)
      .send({ PostId: 2 })
      .end((err, res) => {
        if (err) return done(err);
        expect(200);
        expect(res.body.msg).toBe('post liked successfully');
        return done();
      });
  });
  test('like a post that is already liked, should fail', done => {
    supertest(app)
      .post('/api/v1/likes')
      .set('Authorization', `Bearer ${token}`)
      .send({ PostId: 2 })
      .end((err, res) => {
        if (err) return done(err);
        expect(400);
        expect(res.body.msg).toBe(
          'something went wrong, you cannot like this post',
        );
        return done();
      });
  });
  test('like a nonexistent post, should fail', done => {
    supertest(app)
      .post('/api/v1/likes')
      .set('Authorization', `Bearer ${token}`)
      .send({ PostId: 100 })
      .end((err, res) => {
        if (err) return done(err);
        expect(400);
        expect(res.body.msg).toBe(
          'something went wrong, you cannot like this post',
        );
        return done();
      });
  });
});

describe('unlike a post', () => {
  test('unlike a post from an authorized account, should be successful', done => {
    supertest(app)
      .delete('/api/v1/likes')
      .set('Authorization', `Bearer ${token}`)
      .send({ PostId: 2 })
      .end((err, res) => {
        if (err) return done(err);
        expect(200);
        expect(res.body.msg).toBe('post unliked successfully');
        return done();
      });
  });
  test("unlike a post that isn't liked, should fail", done => {
    supertest(app)
      .delete('/api/v1/likes')
      .set('Authorization', `Bearer ${token}`)
      .send({ PostId: 2 })
      .end((err, res) => {
        if (err) return done(err);
        expect(200);
        expect(res.body.msg).toBe(
          'something went wrong, you cannot like this post',
        );
        return done();
      });
  });
  test("unlike a post that doesn't exist, should fail", done => {
    supertest(app)
      .delete('/api/v1/likes')
      .set('Authorization', `Bearer ${token}`)
      .send({ PostId: 100 })
      .end((err, res) => {
        if (err) return done(err);
        expect(200);
        expect(res.body.msg).toBe(
          'something went wrong, you cannot like this post',
        );
        return done();
      });
  });
});
afterAll(() => sequelize.close());
