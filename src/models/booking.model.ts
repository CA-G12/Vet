import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class booking extends Model {
  declare id?: number
  declare userId: number
  declare doctorId: number
  declare description: string
}

booking.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false

  },
  doctorId: {
    type: DataTypes.NUMBER,
    allowNull: false

  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false

  }

},
{
  sequelize
}
)

export default booking
