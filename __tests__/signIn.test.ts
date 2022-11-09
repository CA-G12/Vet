import { afterAll, beforeAll, describe, test } from '@jest/globals';
import router from '../src/app';
import supertest from 'supertest';
import dbBuild from '../src/db/build';
import sequelize from '../src/db/connection';

beforeAll(() => dbBuild());

describe('sign in router', () => {
  test('incorrect password', done => {
    supertest(router)
      .post('/api/v1/sign-in')
      .send({
        email: 'saeed@gmail.com',
        password: '123asa456',
      })
      .expect(422)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) {
          done(err);
        } else {
          return done();
        }
      });
  });

  test('email is not exist', done => {
    supertest(router)
      .post('/api/v1/sign-in')
      .send({
        email: 'most0717883@gmail.com',
        password: '123456',
      })
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        else {
          return done();
        }
      });
  });
  test('check if the user logged in successfully', done => {
    supertest(router)
      .post('/api/v1/sign-in')
      .send({
        email: 'saeed@gmail.com',
        password: '123456',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        else {
          return done();
        }
      });
  });
});

afterAll(() => sequelize.close());
