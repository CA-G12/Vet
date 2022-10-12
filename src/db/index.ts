import { User, Like, Comment, Animal, Post, Booking, Tag } from '../models'
import sequelize from './connection'

User.hasMany(Post, { as: 'posts' })
Post.belongsTo(User, { as: 'user', foreignKey: 'userId' })
User.hasMany(Like, { as: 'likes' })
Like.belongsTo(User, { as: 'user', foreignKey: 'userId' })
User.hasMany(Comment, { as: 'comments' })
Comment.belongsTo(User, { as: 'user', foreignKey: 'userId' })
User.hasMany(Booking, { as: 'bookings' })
Booking.belongsTo(User, { as: 'user', foreignKey: 'userId' })
Booking.belongsTo(User, { as: 'doctor', foreignKey: 'doctorId' })
Post.hasMany(Comment, { as: 'comments' })
Comment.belongsTo(Post, { as: 'post', foreignKey: 'postId' })
Post.hasMany(Like, { as: 'Likes' })
Like.belongsTo(Post, { as: 'post', foreignKey: 'postId' })
Tag.hasMany(Post, { as: 'posts' })
Post.belongsTo(Tag, { as: 'tag', foreignKey: 'tagId' })
Animal.hasMany(Post, { as: 'posts' })
Post.belongsTo(Animal, { as: 'animal', foreignKey: 'animalId' })

export default sequelize
