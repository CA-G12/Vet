import { expect, test } from '@jest/globals';
import app from '../src/app';
import supertest from 'supertest';
import build from '../src/db/build';
import sequelize from '../src/db/connection';

let token = '';

beforeAll(() => build());

beforeAll(async () => {
  const response = await supertest(app).post('/api/v1/sign-in').send({
    email: 'saeed@gmail.com',
    password: '123456',
  });
  token = response.body.data.token;
});

describe(' Appointments for success', () => {
  test('for insert new appointment', done => {
    supertest(app)
      .post('/api/v1/Appointment')
      .set('Authorization', `Bearer ${token}`)
      .send({
        appointment: {
          DoctorId: 6,
          title: 'test2 test3',
          start: '2022-10-27T18:00:00+03:00',
          end: '2022-10-27T20:00:00+03:00',
          description: 'test 1test2 ,test3 test 1 ,test2 ,test3   ',
        },
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.msg).toBe('Your book in pending ');
          return done();
        }
      });
  });
  test('update appointment', done => {
    supertest(app)
      .put('/api/v1/Appointment')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: 2,
        DoctorId: 6,
        title: 'updateddddddd',
        start: '2022-10-29T18:00:00+03:00',
        end: '2022-10-29T20:00:00+03:00',
        description: 'updatatattateddddddddd',
      })
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.msg).toBe('Booking not found ');
          return done();
        }
      });
  });
  test('get appointment', done => {
    supertest(app)
      .get('/api/v1/Appointment/6')
      .expect(200)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.docAppointment.length).toBeGreaterThan(0);
          return done();
        }
      });
  });
  test('get pending appointment', done => {
    supertest(app)
      .get('/api/v1/pending-appointment/6')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.pending.length).toBeGreaterThan(0);
          return done();
        }
      });
  });
  test('accept appointment', done => {
    supertest(app)
      .put('/api/v1/pending-appointment')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: 2,
        DoctorId: 6,
        status: 'ACCEPTED',
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.msg).toBe('Booking not found ');
          return done();
        }
      });
  });
  test('Delete appointment', done => {
    supertest(app)
      .delete('/api/v1/Appointment/6')
      .set('Authorization', `Bearer ${token}`)
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

describe('invalid inputs for insert Appointment ', () => {
  test('add invalid description  appointment', done => {
    supertest(app)
      .post('/api/v1/Appointment')
      .set('Authorization', `Bearer ${token}`)
      .send({
        appointment: {
          DoctorId: 6,
          title: 'test2 test3',
          start: '2022-10-27T18:00:00+03:00',
          end: '2022-10-27T20:00:00+03:00',
          description: 'tt3',
        },
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          expect(res.body.msg);
          return done();
        }
      });
  });
  test('Delete appointment', done => {
    supertest(app)
      .delete('/api/v1/Appointment/6')
      .set('Authorization', `Bearer ${token}`)
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

afterAll(() => sequelize.close());
