import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class post extends Model {
  declare id?: number
  declare content: string
  declare image: string
  declare tagId: number
  declare animalId: number
  declare userId: number
}

post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    tagId: {
      type: DataTypes.INTEGER
    },
    animalId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize
  }
)

export default post
