import app from './app'
import config from './config/environment'

console.log(config)

const port = config.port

app.listen(port, () => {
  console.log('server running in http://localhost:8080')
})
