import { describe, expect, test } from '@jest/globals'
import app from '../src/app'
import supertest from 'supertest'
import build from '../src/db/build'
import sequelize from '../src/db/connection'

beforeEach(() => build())

describe('all post ', () => {
  test('all post', (done) => {
    supertest(app)
      .get('/posts')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.length).toEqual(2)
        return done()
      })
  })
})
describe('get posts by specific animal ', () => {
  test('get posts by specific animal', (done) => {
    supertest(app)
      .get('/posts?animalId=1')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.length).toEqual(1)
        return done()
      })
  })
})

describe('get posts by specific tag ', () => {
  test('get posts by specific tag', (done) => {
    supertest(app)
      .get('/posts?tagId=1')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.length).toEqual(1)
        return done()
      })
  })
})

describe('get some post when add searchCountent ,tag,animal ', () => {
  test('get some post when add searchCountent ,tag,animal', (done) => {
    supertest(app)
      .get('/posts?tagId=1&animalId=1&q=1111')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.length).toEqual(1)
        return done()
      })
  })
})

describe('get some post when add searchCountent ,tag,animal ', () => {
  test('get some post when add searchCountent ,tag,animal', (done) => {
    supertest(app)
      .get('/posts?q=1111')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.length).toEqual(1)
        return done()
      })
  })
})
describe('Not getting any data when When searching for something that is not there ', () => {
  test('Not getting any data when When searching for something that is not there', (done) => {
    supertest(app)
      .get('/posts?tagId=1&animalId=1&q=kakashi')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.length).toEqual(0)
        return done()
      })
  })
})

afterAll(() => sequelize.close())
