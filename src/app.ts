import express, { Application } from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import environment from './config/environment'
import passport from 'passport'
import './config/auth'
import { join } from 'path'
import router from './routes'
class App {
  public app: Application
  public nodeEnv: string

  constructor () {
    this.app = express()
    this.nodeEnv = environment.nodeEnv
    this.initializeMiddlwares()
  }

  private initializeMiddlwares (): void {
    this.app.use(compression())
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.static(join(__dirname, '..', 'client', 'build')))
    this.app.use(passport.initialize())
    this.app.use(router)
  }
}

const { app } = new App()

export default app
