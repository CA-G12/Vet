import { Model } from 'sequelize';
declare class Booking extends Model {
    id?: number;
    userId: number;
    doctorId: number;
    description: string;
}
export default Booking;
