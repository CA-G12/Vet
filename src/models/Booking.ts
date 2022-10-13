import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class Booking extends Model {
  declare id?: number
  declare userId: number
  declare doctorId: number
  declare description: string
}

Booking.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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

export default Booking
