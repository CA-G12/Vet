import express, { Request, Response } from 'express'
import { join } from 'path'
import compression from 'compression'
import cookieParser from 'cookie-parser'
// Middlewares
const app = express()

app.disable('x-powered-by')

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(compression())
app.use(express.static(join(__dirname, '..', 'client', 'build')))

// Routers
app.get('/', (req: Request, res: Response) => {
  res.send('hello Said ')
})
// handling errors

export default app
