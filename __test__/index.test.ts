import { describe, expect, test, beforeEach, afterAll } from '@jest/globals'
import app from '../src/app'
import supertest from 'supertest'
import build from '../src/db/build'
import sequelize from '../src/db/connection'

beforeEach(() => build())

describe('add a post', () => {
  test('add a post successfully', (done) => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a legitimate content that should work',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        expect(res.body.msg).toBe('new post added successfully')
        return done()
      })
  })
  test('add a post with empty content', (done) => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: null,
        AnimalId: null,
        TagId: null,
        content: '',
        image: ''
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        return done()
      })
  })
  test('add a post with empty image', (done) => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: 'hey this is a post without an image and that\'s totally fine!',
        image: ''
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        expect(res.body.msg).toBe('new post added successfully')
        return done()
      })
  })
  test('add a post with a link that isn\'nt an image', (done) => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a dead post that has a dead image :(',
        image: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        return done()
      })
  })
  test('add a post with a link that isn\'nt an image', (done) => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: 1,
        TagId: 1,
        content: 'hey im a dead post that has a dead image :(',
        image: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        return done()
      })
  })
  test('add a post with one id missing', (done) => {
    supertest(app)
      .post('/api/v1/posts')
      .send({
        UserId: 1,
        AnimalId: null,
        TagId: 1,
        content: 'hey im a dead post that doesn\'t have a tag :(',
        image: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        return done()
      })
  })
})

afterAll(() => sequelize.close())
