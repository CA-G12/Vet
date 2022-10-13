import { User, Like, Comment, Animal, Post, Booking, Tag } from '../models'
import sequelize from './connection'

User.hasMany(Post, { foreignKey: 'userId' })
Post.belongsTo(User)

User.hasMany(Like, { foreignKey: 'userId' })
Like.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

User.hasMany(Booking, { as: 'bookings' })
Booking.belongsTo(User, { as: 'user', foreignKey: 'userId' })
Booking.belongsTo(User, { as: 'doctor', foreignKey: 'doctorId' })

Post.hasMany(Comment)

Comment.belongsTo(Post)
Post.hasMany(Like, { foreignKey: 'postId' })
Like.belongsTo(Post)

Tag.hasMany(Post)
Post.belongsTo(Tag)

Animal.hasMany(Post)
Post.belongsTo(Animal)

export default sequelize