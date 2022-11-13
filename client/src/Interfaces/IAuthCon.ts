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
  signUp: (info: SignUp) => Promise<Boolean>;
  signIn: (info: SignIn) => Promise<void>;
  signOut: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  user: IAuth | null;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default IAuthCon;
