import { Model, CreationOptional } from 'sequelize';
declare class Animal extends Model {
    id: CreationOptional<number>;
    name: string;
}
export default Animal;
