import sequelize from './index'
import { User, Post, Like, Animal, Tag } from '../models'
import data from './data.json'
import environment from '../config/environment'

const buildDB = async () => {
  await sequelize.sync({ force: true })
}

if (environment.nodeEnv !== 'test') {
  buildDB().then(res => console.log(res)).catch(err => console.log(err))
}
