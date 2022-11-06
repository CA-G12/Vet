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
describe('update a post', () => {
  test('update a post successfully', done => {
    supertest(app)
      .put('/api/v1/post/6')
      .set('Authorization', `Bearer ${token}`)
      .send({
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a legitimate content that should work',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photosdd-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(200);
        expect(res.body.msg).toBe('post updated successfully');
        return done();
      });
  });
  test("update a post that isn't the user's, should be rejected", done => {
    supertest(app)
      .put('/api/v1/post/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a legitimate content that should work',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photosdd-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(400);
        expect(res.body.msg).toBe('you cannot update this post');
        return done();
      });
  });
  test('update a post and removing the image, should work', done => {
    supertest(app)
      .put('/api/v1/post/6')
      .set('Authorization', `Bearer ${token}`)
      .send({
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a legitimate content that should work',
        image: '',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(200);
        expect(res.body.msg).toBe('post updated successfully');
        return done();
      });
  });
  test('update a post and removing all content', done => {
    supertest(app)
      .put('/api/v1/post/6')
      .set('Authorization', `Bearer ${token}`)
      .send({
        AnimalId: 0,
        TagId: 0,
        content: '',
        image: '',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(400);
        expect(res.body.msg).toBe('"content" is not allowed to be empty');
        return done();
      });
  });
});
afterAll(() => sequelize.close());
