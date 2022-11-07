import IDoctorInfo from '../doctor/IDoctorInfo';

interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  iat?: number;
  role?: string;
  username?: string;
  Doctor?: IDoctorInfo;
}
export default IUser;
