import { Router } from 'express'
import UsersController from '../controllers/AuthController'
import passport from 'passport'
import isAdmin from '../middlewares/auth/isAdmin'

const signInRouter = Router()

signInRouter.get('/auth/google',
  passport.authenticate('google',
    {
      scope: ['email', 'profile'], session: false
    }))

signInRouter.get('/oauth2/redirect/google',
  passport.authenticate('google', { failureRedirect: '/auth/google/fail', session: false }),
  UsersController.googleAuth)

signInRouter.get('/auth/google/failure', (req, res) => {
  res.render('/auth/fail')
})

signInRouter.post('/signin', UsersController.signin)
signInRouter.get('/hello', isAdmin, (req, res) => {
  console.log(req.user)
  res.send('heelloooo')
})

export default signInRouter
