import sequelize from '../db/connection'
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'

export class Like extends Model<InferAttributes<Like>, InferCreationAttributes <Like>> {
  declare id: CreationOptional<number>
}
Like.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  }
}, {
  sequelize
})
