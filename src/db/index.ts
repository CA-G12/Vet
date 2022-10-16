import { User, Like, Comment, Animal, Post, Booking, Tag, DoctorInfo } from '../models'
import sequelize from './connection'

User.hasOne(DoctorInfo, { foreignKey: { name: 'DoctorId' } })
DoctorInfo.belongsTo(User, { foreignKey: { name: 'DoctorId', allowNull: false } })

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Like)
Like.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

User.hasMany(Booking, { as: 'bookings' })
Booking.belongsTo(User, { as: 'User' })
Booking.belongsTo(User, { as: 'Doctor' })

Post.hasMany(Comment)

Comment.belongsTo(Post)
Post.hasMany(Like)
Like.belongsTo(Post)

Tag.hasMany(Post)
Post.belongsTo(Tag)

Animal.hasMany(Post)
Post.belongsTo(Animal)

export { sequelize, User, Like, Comment, Animal, Post, Booking, Tag, DoctorInfo }
