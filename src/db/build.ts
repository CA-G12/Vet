import sequelize from './index'
import environment from '../config/environment'

const buildDB = async () => {
  await sequelize.sync({ force: true })
}

if (environment.nodeEnv !== 'test') {
  buildDB().then(res => console.log(res)).catch(err => console.log(err))
}
