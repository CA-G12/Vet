import IUser from './post/IUser';

type IAuth = IUser & {
  role?: string;
  password?: string;
  showPassword?: boolean;
  showConfirmPassword?: boolean;
};
export default IAuth;
