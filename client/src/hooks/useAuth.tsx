import React, {
  useState, createContext, useMemo,
} from 'react';
import { toast } from 'react-toastify';
import IAuth from '../Interfaces/IAuth';
import IAuthCon from '../Interfaces/IAuthCon';
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from '../services/ApiServices';
import JwtService from '../services/JwtService';
import { SignUpValid } from '../Validation';

const authContext = createContext<IAuthCon>({} as IAuthCon);

const ProvideAuth = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IAuth>();
  const signUp = async ({
    email, password, confirmPassword, name, role,
  }: IAuth) => {
    ApiServices.init();
    SignUpValid.validate({
      email, password, confirmPassword, name, role,
    })
      .then(() => {
        ApiServices.post('/sign-up', {
          email, password, confirmPassword, name, role,
        }).then((data) => {
          JwtService.setToken(data.data.token);
          setUser({
            name, role, email, avatar: data.data.avatar,
          });
          toast.success(data.data.name);
        }).catch((err) => toast.error(err.response.data.msg));
      })
      .catch((err: any) => {
        toast.error(err.message);
      });
  };
  const signIn = ({ email, password }: IAuth) => {
    ApiServices.post('/sign-in', { email, password }).then((data) => { console.log(data); }).catch((err) => console.log(err));
  };
  const signOut = () => {
    ApiServices.init();
    JwtService.destroyToken();
  };

  const authValues = useMemo(() => ({
    user, signUp, signIn, signOut,
  }), [user]);
  return <authContext.Provider value={authValues}>{children}</authContext.Provider>;
};
export { ProvideAuth, authContext };
