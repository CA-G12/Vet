import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class booking extends Model {
  declare id?: number
  declare user_id: number
  declare doctor_id: number
  declare description: string
}

booking.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.NUMBER,
    allowNull: false

  },
  doctor_id: {
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
