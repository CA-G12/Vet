import app from './app'
import config from './config/environment'
const port = config.port

app.listen(port, () => {
  console.log('server running in http://localhost:8080')
})
