import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Post extends Model {
  declare id?: number;
  declare content: string;
  declare image: string;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  },
);

export default Post;
