import sequelize from '../db/connection'
import {
  Model,
  CreationOptional,
  DataTypes
} from 'sequelize'

class Comment extends Model {
  declare id?: CreationOptional<number>
  declare comment: string
  declare image: string
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
  }
}, {
  sequelize
})
export default Comment
