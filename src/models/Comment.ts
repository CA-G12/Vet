import sequelize from '../db/connection'
import {
  Model,
  CreationOptional,
  DataTypes,
  InferAttributes, InferCreationAttributes
} from 'sequelize'

export class Comment extends Model <InferAttributes<Comment>, InferCreationAttributes<Comment>> {
  declare id?: CreationOptional<number>
  declare comment: string
  declare image: string
  declare postId: number
  declare userId: number
}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
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
