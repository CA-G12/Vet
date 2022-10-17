import sequelize from '../db/connection'
import { Model, CreationOptional, DataTypes } from 'sequelize'

class Animal extends Model {
  declare id: CreationOptional<number>
  declare name: string
}
Animal.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
})

export default Animal
