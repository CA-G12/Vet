import sequelize from './index'
import { User, Post, Like, Animal, Tag } from '../models'
import data from './data.json'
import environment from '../config/environment'

if (environment.nodeEnv !== 'test') {
  const buildDB = async () => {
    await sequelize.sync({ force: true })
  }

  buildDB().then(res => console.log(res)).catch(err => console.log(err))
}
