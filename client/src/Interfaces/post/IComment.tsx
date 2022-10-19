import User from './IUser';

interface IComment{
    id:number
    UserId:number
    comment:string
    image:string|null
    User:User
}
export default IComment;
