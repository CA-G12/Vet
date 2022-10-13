import { User, Like, Comment, Animal, Post, Booking, Tag } from '../models'
import sequelize from './connection'

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Like)
Like.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

User.hasMany(Booking, { as: 'bookings' })
Booking.belongsTo(User, { as: 'user' })
Booking.belongsTo(User, { as: 'doctor' })

Post.hasMany(Comment)

Comment.belongsTo(Post)
Post.hasMany(Like)
Like.belongsTo(Post)

Tag.hasMany(Post)
Post.belongsTo(Tag)

Animal.hasMany(Post)
Post.belongsTo(Animal)

export default sequelize
