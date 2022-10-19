import JWTStrategy from 'passport-jwt'
import passport from 'passport'
import GooglePassport from 'passport-google-oauth20'
import { User } from '../models'
import environment from './environment'
import { Request } from 'express'

// Google Strategy Authentication
const GoogleStrategy = GooglePassport.Strategy
const googleClientId = environment.googleClientId ?? ''
const googleClientSecret = environment.googleClientSecret ?? ''
const CallBackURL = '/oauth2/redirect/google'
passport.use(new GoogleStrategy({
  clientID: googleClientId,
  clientSecret: googleClientSecret,
  callbackURL: CallBackURL,
  passReqToCallback: true,
  scope: ['profile', 'email']
},
async (req:Request, accessToken:any, refreshToken:any, profile:any, done:any) => {
  try {
    const user:any = await User.findOrCreate({
      where: {
        email: profile.emails[0].value
      },
      defaults: {
        name: profile.displayName,
        avatar: profile.photos[0].value,
        password: '',
        role: 'User'
      }
    })

    if (!user) {
      return done(null, false)
    } else {
      // console.log(user[0].dataValues)

      const authUser = user[0].dataValues
      authUser.accessToken = accessToken
      authUser.isPreviousUser = user[1]
      done(null, authUser)
    }
  } catch (error) {
    done(error)
  }
}))

// LocalStrategy Authentication
const JwtStrategy = JWTStrategy.Strategy
const ExtractJwt = JWTStrategy.ExtractJwt
const jwtOptions:any = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = environment.secretKey
// console.log(jwtOptions.jwtFromRequest)

passport.use(new JwtStrategy(
  jwtOptions, (jwtPayload, done) => {
    console.log(jwtPayload, 'here we are in passport ')
    User.findOne({ where: { id: jwtPayload.id } })
      .then(user => {
        if (user) {
          return done(null, user)
        }
        return done(null, false)
      })
      .catch(err => {
        console.log(err)
      })
  }
))
