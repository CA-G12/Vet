import { User, Post, Like, Animal, Tag, DoctorInfo, sequelize } from '.'
import environment from '../config/environment'
import data from './seeds.json'
const buildDB = async () => {
  await sequelize.sync({ force: true })
  await Animal.bulkCreate(data.Animal)
  await Tag.bulkCreate(data.Tag)
  await User.bulkCreate(data.User)
  await Post.bulkCreate(data.Post)
  await Like.bulkCreate(data.Like)
  await DoctorInfo.bulkCreate(data.DoctorInfo)
}

if (environment.nodeEnv !== 'test') {
  buildDB()
}

export default buildDB
