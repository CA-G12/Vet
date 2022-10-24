
import dotenv from 'dotenv'
dotenv.config()

const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
const port = process.env.PORT
const secretKey = process.env.SECRET_KEY
const nodeEnv = process.env.NODE_ENV

if (!port) {
  throw new Error('invalid port')
}

if (!secretKey) {
  throw new Error('invalid Secret Key')
}

if (!nodeEnv) {
  throw new Error('invalid Node Environment')
}

let dbUrl: string | undefined
switch (nodeEnv) {
  case 'development':
    dbUrl = process.env.DEV_DB_URL
    break
  case 'production':
    dbUrl = process.env.DATABASE_URL
    break
  case 'test':
    dbUrl = process.env.TEST_URL
    break
  default:
    throw new Error('DataBase Connection Url Error')
}

export default {
  port,
  dbUrl,
  nodeEnv,
  secretKey,
  googleClientId,
  googleClientSecret
}
