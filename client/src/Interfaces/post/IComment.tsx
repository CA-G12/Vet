import IUser from './IUser';

interface IComment{
    id:number
    UserId:number
    comment:string
    image:string|null
    User:IUser
}
export default IComment;
