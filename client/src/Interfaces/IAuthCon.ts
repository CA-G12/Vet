import { Dispatch, SetStateAction } from 'react';
import IAuth from './IAuth';

export type SignIn = {
  email: string;
  password: string;
};

export type SignUp = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
};

interface IAuthCon {
  signUp: (info: SignUp) => Promise<void>;
  signIn: (info: SignIn) => Promise<void>;
  signOut: () => void;
  user: IAuth | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default IAuthCon;
