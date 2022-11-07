import { Dispatch, SetStateAction } from 'react';
import IAuth from './IAuth';

interface IAuthCon {
  signUp: (info: IAuth) => Promise<void>;
  signIn: (info: IAuth) => Promise<void>;
  signOut: () => void;
  user?: IAuth;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default IAuthCon;
