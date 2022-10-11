import { Sequelize } from 'sequelize'
import environment from '../config/environment'

const sequelize = new Sequelize(environment.dbUrl ?? '', {
  define: {
    timestamps: true
  }
})

export default sequelize
