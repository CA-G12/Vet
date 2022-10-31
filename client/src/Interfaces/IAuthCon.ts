import IAuth from './IAuth';

interface IAuthCon {
  signUp: (info: IAuth) => Promise<void>;
  signIn: (info: IAuth) => Promise<void>;
  signOut: (info: IAuth) => void;
  user?: IAuth;
  open: Boolean;
  setOpen: any;
}

export default IAuthCon;
