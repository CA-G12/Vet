import express, { Application } from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import environment from './config/environment'
import router from './routes'
import { join } from 'path'
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
    this.app.use('/api/v1', router)
  }
}

const { app } = new App()

export default app
