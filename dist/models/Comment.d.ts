import { Model, CreationOptional } from 'sequelize';
declare class Comment extends Model {
    id?: CreationOptional<number>;
    comment: string;
    image: string;
}
export default Comment;
