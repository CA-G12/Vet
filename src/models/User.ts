
import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class User extends Model {
  declare id?: number
  declare name: string
  declare email: string
  declare password: string
  declare role: 'ADMIN' | 'USER' | 'DOCTOR'
  declare avatar?: string
}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('ADMIN', 'USER', 'DOCTOR'),
    allowNull: false
  },
  avatar: {
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
  }
}, {
  sequelize
})
export default User
