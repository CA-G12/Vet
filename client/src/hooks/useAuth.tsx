import React, {
  useState, createContext, useMemo,
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
      const signInReq = await ApiServices.post('/sign-up', {
        email, password, confirmPassword, name, role,
      });
      JwtService.setToken(signInReq.data.token);
      setUser({
        id: signInReq.data.id,
        name: signInReq.data.name,
        role: signInReq.data.role,
        email: signInReq.data.email,
        avatar: signInReq.data.avatar,
      });
      toast.success(signInReq.data.name);
      callback();
    } catch (err:any) {
      toast.error(err.response);
      callback();
    }
  };
  const signIn = ({ email, password }: IAuth) => {
    ApiServices.post('/sign-in', { email, password }).then((data) => { console.log(data); }).catch((err) => console.log(err));
  };
  const signOut = () => {
    JwtService.destroyToken();
    setUser({});
  };

  const authValues = useMemo(() => ({
    user, signUp, signIn, signOut,
  }), [user]);
  return <authContext.Provider value={authValues}>{children}</authContext.Provider>;
};
export { ProvideAuth, authContext };
