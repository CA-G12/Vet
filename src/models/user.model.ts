
import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class User extends Model {
  declare id?: string
  declare name: string
  declare email: string
  declare password: string
  declare createdAt?: Date
  declare updatedAt?: Date
}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  modelName: 'user'
})
export default User
