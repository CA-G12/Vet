import React, {
  useState, createContext, useMemo, useEffect,
} from 'react';
import { toast } from 'react-toastify';
import IAuth from '../Interfaces/IAuth';
import IAuthCon from '../Interfaces/IAuthCon';
import ApiServices from '../services/ApiServices';
import JwtService from '../services/JwtService';

const authContext = createContext<IAuthCon>({} as IAuthCon);

const ProvideAuth = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IAuth>();

  const signUp = async ({
    email, password, confirmPassword, name, role,
  }: IAuth, callback:Function) => {
    try {
      const signUpReq = await ApiServices.post('/sign-up', {
        email, password, confirmPassword, name, role,
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
      callback();
    } catch (err:any) {
      toast.error(err.response);
      callback();
    }
  };
  const signIn = async ({ email, password }: IAuth, callback:Function) => {
    try {
      const signInReq = await ApiServices.post('/sign-in', { email, password });
      setUser({
        id: signInReq.data.data.id,
        name: signInReq.data.data.name,
        role: signInReq.data.data.role,
        email: signInReq.data.data.email,
        avatar: signInReq.data.data.avatar,
      });
      JwtService.setToken(signInReq.data.data.token);
      toast.success(signInReq.data.data.name);
      callback();
    } catch (err:any) {
      toast.error(err.response);
      callback();
    }
  };
  const signOut = () => {
    JwtService.destroyToken();
    setUser({});
  };
  useEffect(() => {
    const userReq = async () => {
      try {
        const dataUnMount = await ApiServices.get('/user/me');
        setUser(dataUnMount.data.user);
      } catch (error:any) {
        setUser({});
      }
    };
    userReq();
  }, []);
  const authValues = useMemo(() => ({
    user, signUp, signIn, signOut,
  }), [user]);
  return <authContext.Provider value={authValues}>{children}</authContext.Provider>;
};
export { ProvideAuth, authContext };
