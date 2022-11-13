import React, {
  useState,
  createContext,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

import { toast } from 'react-toastify';

import IAuthCon, { SignIn, SignUp } from '../Interfaces/IAuthCon';

import ApiService from '../services/ApiService';
import JwtService from '../services/JwtService';

const authContext = createContext<IAuthCon>({} as IAuthCon);

const ProvideAuth = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IAuthCon['user']>(null);

  // signing pop up
  const [open, setOpen] = useState(false);
  // Auth Sign Form
  const [value, setValue] = React.useState('1');

  const signUp = useCallback(
    async ({ email, password, confirmPassword, name, role }: SignUp) => {
      try {
        const signUpReq = await ApiService.post('/sign-up', {
          email,
          password,
          confirmPassword,
          name,
          role,
        });
        JwtService.setToken(signUpReq.data.token);
        setUser({
          id: signUpReq.data.id,
          name: signUpReq.data.name,
          role: signUpReq.data.role,
          email: signUpReq.data.email,
          avatar: signUpReq.data.avatar,
        });
        toast.success(signUpReq.data.name);
        return true;
      } catch (err: any) {
        toast.error(err.response.data.msg);
        return false;
      }
    },
    [],
  );

  const signIn = useCallback(async ({ email, password }: SignIn) => {
    try {
      const signInReq = await ApiService.post('/sign-in', { email, password });
      setUser({
        id: signInReq.data.data.id,
        name: signInReq.data.data.name,
        role: signInReq.data.data.role,
        email: signInReq.data.data.email,
        avatar: signInReq.data.data.avatar,
      });
      JwtService.setToken(signInReq.data.data.token);
      toast.success(signInReq.data.data.name);
      setOpen(false);
    } catch (err: any) {
      toast.error(err.response.data.ms);
    }
  }, []);

  const signOut = useCallback(() => {
    JwtService.destroyToken();
    setUser(null);
  }, []);

  useEffect(() => {
    const userReq = async () => {
      try {
        const dataUnMount = await ApiService.get('/user/me');
        setUser(dataUnMount.data.user);
      } catch (error: any) {
        setUser(null);
      }
    };
    userReq();
  }, []);

  const authValues = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      signOut,
      open,
      setOpen,
      value,
      setValue,
    }),
    [user, signUp, signIn, signOut, open, setOpen, value],
  );
  return (
    <authContext.Provider value={authValues}>{children}</authContext.Provider>
  );
};
export { ProvideAuth, authContext };
