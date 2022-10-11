import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class tag extends Model {
  declare id?: number
  declare description: string
}

tag.init({
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

export default tag
