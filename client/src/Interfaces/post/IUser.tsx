import IDoctorInfo from '../doctor/IDoctorInfo';

interface IUser{
  id:number
  name:string
  avatar:string
  role:string
  DoctorInfo?:IDoctorInfo
}
export default IUser;
