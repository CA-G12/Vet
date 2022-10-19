
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
      defaultValue: 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png',
      allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize
})
export default User
