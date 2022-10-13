import sequelize from '../db/connection'
import { Model, CreationOptional, DataTypes } from 'sequelize'

class Like extends Model {
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
export default Like
