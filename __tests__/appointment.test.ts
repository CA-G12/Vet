import { expect, test } from '@jest/globals';
import app from '../src/app';
import supertest from 'supertest';
import build from '../src/db/build';
import sequelize from '../src/db/connection';

beforeEach(() => build());
afterAll(() => sequelize.close());

test('get appointment', done => {
  supertest(app)
    .get('/api/v1/Appointment/6')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      else {
        console.log(res.body.docAppointment);
        expect(res.body.docAppointment.length).toBeGreaterThan(0);
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
        console.log(res.body.pending);
        expect(res.body.pending.length).toBeGreaterThan(0);
        return done();
      }
    });
});
