import { describe, expect, test } from '@jest/globals'
import app from '../src/app'
import supertest from 'supertest'
import build from '../src/db/build'
import sequelize from '../src/db/connection'

beforeEach(() => build())

describe('all post ', () => {
  test('all post', (done) => {
    supertest(app)
      .get('/post')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.length).toEqual(2)
        return done()
      })
  })
})

afterAll(() => sequelize.close())
