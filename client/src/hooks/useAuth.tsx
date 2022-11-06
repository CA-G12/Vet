import React, {
  useState,
  createContext,
  useMemo,
  useEffect,
  useCallback,
} from 'react';

import { toast } from 'react-toastify';

import IAuth from '../Interfaces/IAuth';
import IAuthCon from '../Interfaces/IAuthCon';

import ApiService from '../services/ApiService';
import JwtService from '../services/JwtService';

const authContext = createContext<IAuthCon>({} as IAuthCon);

const ProvideAuth = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IAuthCon['user']>();

  // signing pop up
  const [open, setOpen] = useState(false);

  const signUp = useCallback(
    async ({ email, password, confirmPassword, name, role }: IAuth) => {
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
      } catch (err: any) {
        toast.error(err.response);
      }
    },
    [],
  );

  const signIn = useCallback(async ({ email, password }: IAuth) => {
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
    } catch (err: any) {
      toast.error(err.response);
    }
  }, []);

  const signOut = useCallback(() => {
    JwtService.destroyToken();
    setUser(undefined);
  }, []);

  useEffect(() => {
    const userReq = async () => {
      try {
        const dataUnMount = await ApiService.get('/user/me');
        setUser(dataUnMount.data.user);
      } catch (error: any) {
        setUser(undefined);
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
    }),
    [user, signUp, signIn, signOut, open, setOpen],
  );

  return (
    <authContext.Provider value={authValues}>{children}</authContext.Provider>
  );
};
export { ProvideAuth, authContext };
