import JWTStrategy from 'passport-jwt'
import passport from 'passport'
import GooglePassport from 'passport-google-oauth20'
import findOrCreate from '../helpers/auth/findOrCreateUser'
import bcrypt from 'bcryptjs'
import { Strategy as LocalStrategy } from 'passport-local'
import { User } from '../models'
import environment from './environment'
import { Request } from 'express'

const GoogleStrategy = GooglePassport.Strategy

passport.serializeUser(function (user: any, done) {
  done(null, user.id)
})

passport.deserializeUser((obj: any, done) => {
  done(null, obj)
})

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}
, async (email: any, password: any, done: any) => {
  try {
    console.log(email, 'username')
    const user = await User.findOne({
      attributes: ['id', 'username', 'email', 'profileImg'],
      where: {
        email
      }
    })
    if (!user) {
      return done(null, false, { message: 'can not found user' })
    }

    const verified = await bcrypt.compare(password, user.password)
    verified
      ? done(null, user)
      : done(null, false, { message: 'password not match' })
  } catch (error) {
    done(error)
  }
}))

passport.use(new GoogleStrategy({
  clientID: environment.googleClientId,
  clientSecret: environment.googleClientSecret,
  callbackURL: '/oauth2/redirect/google',
  passReqToCallback: true,
  scope: ['profile', 'email']
},
async (req:Request, accessToken:any, refreshToken:any, profile:any, done:any) => {
  try {
    const user = await findOrCreate(profile.displayName, profile.emails[0].value, profile.photos[0].value)

    if (!user) {
      console.log('can not found user')
      return done(null, false, { message: 'can not found user' })
    } else {
      user.accessToken = accessToken
      done(null, user)
    }
  } catch (error) {
    done(error)
  }
}))

passport.use(

  new JWTStrategy.Strategy(
    {
      jwtFromRequest: (req:Request) => {
        let token = null
        if (req && req.cookies) {
          token = req.cookies.jwt
          console.log(token, 'Token')
        }
        return token
      },
      secretOrKey: environment.secretKey
    },
    (jwtPayload, done) => {
      console.log('token')
      if (!jwtPayload) {
        return done('No token found...')
      }
      return done(null, jwtPayload)
    }
  )
)
