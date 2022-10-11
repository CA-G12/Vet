import sequelize from '../db/connection'
import { Model, DataTypes } from 'sequelize'

class post extends Model {
  declare id?: number
  declare content: string
  declare image: string
  declare tag_id: number
  declare animal_id: number
  declare user_id: number
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
    tag_id: {
      type: DataTypes.INTEGER
    },
    animal_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize
  }
)

export default post
