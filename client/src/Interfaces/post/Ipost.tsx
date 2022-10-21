import User from './IUser';
import Like from './ILike';
import Tag from './ITag';

interface IPost{

    id:number
    content:string
    image:string
    User:User
    Likes:Array<Like>
    Tag:Tag
    Animal:Tag

}
export default IPost;
