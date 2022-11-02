import { describe, expect, test } from '@jest/globals';
import app from '../src/app';
import supertest from 'supertest';
import build from '../src/db/build';
import sequelize from '../src/db/connection';

beforeEach(() => build());
afterAll(() => sequelize.close());
describe(' Appointments for success', () => {
  test('for insert new appointment', done => {
    supertest(app)
      .post('/api/v1/Appointment')
      .send({
        id: 2,
        status: 'ACCEPTED',
        DoctorId: 6,
        title: 'test2 test3',
        start: '2022-10-27T18:00:00+03:00',
        end: '2022-10-27T20:00:00+03:00',
        description: 'test 1test2 ,test3 test 1 ,test2 ,test3   ',
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body).toEqual({
            id: 3,
            start: '2022-10-27T15:00:00.000Z',
            title: 'test2 test3',
            description: 'test 1test2 ,test3 test 1 ,test2 ,test3   ',
          });
          return done();
        }
      });
  });
  test('update appointment', done => {
    supertest(app)
      .put('/api/v1/Appointment')
      .send({
        id: 2,
        DoctorId: 6,
        start: '2022-10-29T18:00:00+03:00',
        end: '2022-10-29T20:00:00+03:00',
        description: 'dmddkdkdkkdkdkdkkdkd',
        title: 'dmddkdkdkkdkdkdkkdkd',
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body).toEqual({
            id: 2,
            start: '2022-10-26T17:00:00.000Z',
            end: '2022-10-26T17:00:00.000Z',
            description: 'dmddkdkdkkdkdkdkkdkd',
            DoctorId: 6,
            title: 'dmddkdkdkkdkdkdkkdkd',
          });
          return done();
        }
      });
  });
  test('get appointment', done => {
    supertest(app)
      .get('/api/v1/Appointment/6')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body[0]).toEqual({
            id: 1,
            title: 'test',
            start: '2022-10-26T17:00:00.000Z',
            description: 'hehehehehhehe',
          });
          return done();
        }
      });
  });
  test('get pending appointment', done => {
    supertest(app)
      .get('/api/v1/pending-appointment/6')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.length).toBeGreaterThan(0);
          return done();
        }
      });
  });
  test('accept appointment', done => {
    supertest(app)
      .put('/api/v1/pending-appointment')
      .send({
        id: 2,
        DoctorId: 6,
        status: 'ACCEPTED',
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body).toEqual({
            id: 2,
            start: '2022-10-26T17:00:00.000Z',
            end: '2022-10-26T17:00:00.000Z',
            status: 'ACCEPTED',
            DoctorId: 6,
            title: 'test',
          });
          return done();
        }
      });
  });
  test('Delete appointment', done => {
    supertest(app)
      .delete('/api/v1/Appointment/6/1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body).toEqual({ done: 'done' });
          return done();
        }
      });
  });
});

describe('invalid inputs for insert Appointment ', () => {
  test('add invalid description  appointment', done => {
    supertest(app)
      .post('/api/v1/Appointment')
      .send({
        id: 2,
        status: 'ACCEPTED',
        DoctorId: 6,
        title: 'test2 test3',
        start: '2022-10-27T18:00:00+03:00',
        end: '2022-10-27T20:00:00+03:00',
        description: 'tt3',
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.msg).toBe(
            '"description" length must be at least 10 characters long',
          );
          return done();
        }
      });
  });
  test('add invalid status appointment', done => {
    supertest(app)
      .post('/api/v1/Appointment')
      .send({
        id: 2,
        DoctorId: 6,
        title: 'tet3',
        start: '2022-10-27T18:00:00+03:00',
        end: '2022-10-27T20:00:00+03:00',
        description: 'tt3est test testes test test ',
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.msg).toBe(
            '"title" length must be at least 5 characters long',
          );
          return done();
        }
      });
  });
  test('Delete appointment', done => {
    supertest(app)
      .delete('/api/v1/Appointment/6/5')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.msg).toBe('Booking not found ');
          return done();
        }
      });
  });
});
