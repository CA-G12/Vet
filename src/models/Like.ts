import  sequelize from '../db/connection'
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'

export class Like extends Model<InferAttributes<Like>, InferCreationAttributes <Like>> {
  declare id: CreationOptional<number>
  declare postId: number
  declare userId: number
}
Like.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  postId: {
    type: DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize
})
