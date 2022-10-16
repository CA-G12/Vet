import { Model } from 'sequelize';
declare class User extends Model {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'USER' | 'DOCTOR';
    avatar?: string;
}
export default User;
