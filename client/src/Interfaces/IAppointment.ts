import IUser from './post/IUser';

interface IAppointment {
  id?: number;
  User?: IUser;
  DoctorId?: number;
  start?: Date;
  end?: Date;
  title?: string;
  description?: string;
}
export default IAppointment;
