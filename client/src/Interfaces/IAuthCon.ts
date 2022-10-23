import IAuth from './IAuth';

interface IAuthCon{
    signUp :Function,
    signIn :Function,
    signOut:Function,
    user?:IAuth
  }

export default IAuthCon;
