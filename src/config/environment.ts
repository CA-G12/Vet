
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT ?? 8080

const googleClientId = process.env.GOOGLE_CLIENT_ID ?? ''

const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ?? ''

const secretKey = process.env.SECRET_KEY

const nodeEnv = process.env.NODE_ENV ?? ''

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
    dbUrl = 'postgres://mss_user:root@localhost:5432/mss'
}

export default {
  port,
  dbUrl,
  nodeEnv,
  secretKey,
  googleClientId,
  googleClientSecret
}
