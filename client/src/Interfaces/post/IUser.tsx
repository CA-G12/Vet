import IDoctorInfo from '../doctor/IDoctorInfo';

interface IUser {
  id?: number;
  name?: string;
  email?: string;
  avatar?: string;
  iat?: number;
  role?: string;
  DoctorInfo?: IDoctorInfo;
  username?: string;
}
export default IUser;
