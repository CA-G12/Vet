import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class DoctorInfo extends Model {
  declare id ?: number
  declare DoctorId : number
  declare hourRate :string
  declare clinicLocation:string
  declare workplace:string
}
DoctorInfo.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  hourRate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clinicLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  workplace: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  sequelize
})

export default DoctorInfo
