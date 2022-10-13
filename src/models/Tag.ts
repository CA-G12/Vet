import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class Tag extends Model {
  declare id?: number
  declare name: string
}

Tag.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false

  }

},
{
  sequelize
}
)

export default Tag
