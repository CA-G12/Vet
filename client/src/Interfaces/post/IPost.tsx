import IUser from './IUser';
import ILike from './ILike';
import ITag from './ITag';

interface IPost{

    id:number
    content:string
    image:string
    User:IUser
    Likes:Array<ILike>
    Tag:ITag
    Animal:ITag

}
export default IPost;
