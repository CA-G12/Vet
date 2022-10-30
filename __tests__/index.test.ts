import { describe, expect, test } from '@jest/globals';
import app from '../src/app';
import supertest from 'supertest';
import build from '../src/db/build';
import sequelize from '../src/db/connection';

beforeEach(() => build());

describe('add a post', () => {
  test('add a post successfully', done => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a legitimate content that should work',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('new post added successfully');
        return done();
      });
  });
  test('add a post with empty content', done => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: null,
        AnimalId: null,
        TagId: null,
        content: '',
        image: '',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });
  test('add a post with empty image', done => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: "hey this is a post without an image and that's totally fine!",
        image: '',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('new post added successfully');
        return done();
      });
  });
  test("add a post with a link that isn'nt an image", done => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a dead post that has a dead image :(',
        image:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('something went wrong');

        return done();
      });
  });
  test("add a post with a link that isn'nt an image", done => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a dead post that has a dead image :(',
        image:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('something went wrong');

        return done();
      });
  });
  test('add a post with one id missing', done => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: null,
        TagId: 1,
        content: "hey im a dead post that doesn't have a tag :(",
        image:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('something went wrong');

        return done();
      });
  });
  // final test here for passport
});
describe('all post ', () => {
  test('all post', done => {
    supertest(app)
      .get('/api/v1/posts')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toEqual(5);
        return done();
      });
  });
  test('get posts by specific animal', done => {
    supertest(app)
      .get('/api/v1/posts?animalId=1')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toEqual(1);
        return done();
      });
  });
  test('get posts by specific tag', done => {
    supertest(app)
      .get('/api/v1/posts?tagId=1')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toEqual(1);
        return done();
      });
  });
  test('get some post when add searchCountent ,tag,animal', done => {
    supertest(app)
      .get('/api/v1/posts?tagId=1&animalId=1&q=1111')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toEqual(1);
        return done();
      });
  });
  test('get some post when add searchCountent ', done => {
    supertest(app)
      .get('/api/v1/posts?q=1111')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toEqual(1);
        return done();
      });
  });
  test('Not getting any data when When searching for something that is not there', done => {
    supertest(app)
      .get('/api/v1/posts?tagId=1&animalId=1&q=kakashi')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toEqual(0);
        return done();
      });
  });
});
describe('add a new comment', () => {
  test('add a comment successfully', done => {
    supertest(app)
      .post('/api/v1/post/1/comments')
      .send({
        UserId: 1,
        comment: 'hey im a legitimate content that should work',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('new post added successfully');
        return done();
      });
  });
  test('add a comment successfully', done => {
    supertest(app)
      .post('/api/v1/post/1/comments')
      .send({
        UserId: 1,
        comment: 'hey im a legitimate content that should work',
        image: '',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('new post added successfully');
        return done();
      });
  });
  test('add a comment fail', done => {
    supertest(app)
      .post('/api/v1/post/1/comments')
      .send({
        UserId: 1,
        comment: '',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('something went wrong');
        return done();
      });
  });
  test('add a comment fail', done => {
    supertest(app)
      .post('/api/v1/post/1/comments')
      .send({
        UserId: 1,
        comment: 'xxxxxxxxxx',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('something went wrong');
        return done();
      });
  });

  test('edit a comment success', done => {
    supertest(app)
      .put('/api/v1/post/1/comments/1')
      .send({
        comment: 'xxxxxxxxxx',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('edit comment successfully');
        return done();
      });
  });

  test('edit a comment fail', done => {
    supertest(app)
      .put('/api/v1/post/1/comments/1')
      .send({
        comment: '',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        expect(res.body.msg).toBe('something went wrong');
        return done();
      });
  });
  test('edit a comment success', done => {
    supertest(app)
      .put('/api/v1/post/1/comments/1')
      .send({
        comment: 'xxxxxxxxxx',
        image: '',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('edit comment successfully');
        return done();
      });
  });

  test('delete a comment success', done => {
    supertest(app)
      .delete('/api/v1/post/1/comments/1')
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('delete comment successfully');
        return done();
      });
  });

  // final test here for passport
});
afterAll(() => sequelize.close());
