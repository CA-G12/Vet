import app from '../app'
import { describe, expect, test } from '@jest/globals'
import supertest from 'supertest'
import build from '../db/build'
import sequelize from '../db/connection'

beforeAll(() => build())
afterAll(() => sequelize.close())

describe('test the signup endpoint', () => {
  test('success signup', (done) => {
    supertest(app)
      .post('/api/v1/sign-up')
      .send(
        {
          name: 'salsabeel',
          email: 'salsabeel12@gmail.com',
          role: 'DOCTOR',
          password: '123456789'
        })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.name).toStrictEqual('salsabeel')
        return done()
      })
  })
  test('Have account for signup', (done) => {
    supertest(app)
      .post('/api/v1/sign-up')
      .send(
        {
          name: 'salsabeel',
          email: 'salsabeel12@gmail.com',
          role: 'DOCTOR',
          password: '123456789'
        })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.massage).toBe('You have account')
        return done()
      })
  })

  test('Email is not valid for signup', (done) => {
    supertest(app)
      .post('/api/v1/sign-up')
      .send(
        {
          name: 'salsabeel',
          email: 'salsabeel12gmail.com',
          role: 'DOCTOR',
          password: '123456789'
        })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.massage.details[0].message).toBe('"email" must be a valid email')
        return done()
      })
  })
})
