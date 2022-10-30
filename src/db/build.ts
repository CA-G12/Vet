import { User, Post, Comment, Like, Animal, Tag, DoctorInfo, sequelize, Booking } from '.'
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
  await Comment.bulkCreate(data.Comment)
  await Booking.bulkCreate(data.Booking)
}

if (environment.nodeEnv !== 'test') {
  buildDB()
}

export default buildDB
