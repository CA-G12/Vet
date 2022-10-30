import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Booking extends Model {
  declare id?: number;
  declare userId: number;
  declare doctorId: number;
  declare description: string;
  declare title: string;
  declare start: Date;
  declare end: Date;
  declare status: 'ACCEPTED' | 'REJECTED' | 'PENDING';
}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('ACCEPTED', 'REJECTED', 'PENDING'),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATE,
    },
    end: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
  },
);

export default Booking;
