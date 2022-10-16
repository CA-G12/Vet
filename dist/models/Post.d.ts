import { Model } from 'sequelize';
declare class Post extends Model {
    id?: number;
    content: string;
    image: string;
}
export default Post;
