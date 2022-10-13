import sequelize from './index'
import { User, Post, Like, Animal, Tag } from '.'
import data from './seeds.json'
import environment from '../config/environment'

const buildDB = async () => {
  await sequelize.sync({ force: true })
  await User.bulkCreate(data.User)
}

if (environment.nodeEnv !== 'test') {
  buildDB().then(res => console.log(res)).catch(err => console.log(err))
}
