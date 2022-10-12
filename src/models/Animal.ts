import { sequelize } from '../db/connection'
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'

export class Animal extends Model<InferAttributes<Animal>, InferCreationAttributes <Animal>> {
  declare id: CreationOptional<number>
  declare name: string
}
Animal.init({
  id: {
    type: DataTypes.UUID,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
})
