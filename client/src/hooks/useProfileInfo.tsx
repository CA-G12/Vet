import React, { createContext, useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import IAuth from '../Interfaces/IAuth';
import IDoctorInfo from '../Interfaces/doctor/IDoctorInfo';
import ApiServices from '../services/ApiService';
import { authContext } from './useAuth';

interface IProfile {
  setUserInfo: React.Dispatch<React.SetStateAction<IAuth>>;
  userInfo: IAuth;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDocInfo: React.Dispatch<React.SetStateAction<IDoctorInfo>>;
  docInfo: IDoctorInfo;
}
export const profileContext = createContext<IProfile>({} as IProfile);

export const ProvideProfile = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const { user } = React.useContext(authContext);
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({} as IAuth);
  const [docInfo, setDocInfo] = useState({
    hourRate: '',
    clinicLocation: '',
    workplace: '',
  } as IDoctorInfo);
  useEffect(() => {
    const doctorInfo = async () => {
      const { data } = await ApiServices.get(`/user/${params.id}`);
      if (data.user?.role === 'DOCTOR') setDocInfo(data.doctorInfo);
      setUserInfo(data.user);
    };
    doctorInfo();
  }, [user, params.id]);

  const profileProps = useMemo(
    () => ({ setOpen, open, userInfo, docInfo, setDocInfo, setUserInfo }),
    [setOpen, open, userInfo, docInfo, setDocInfo, setUserInfo],
  );

  return (
    <profileContext.Provider value={profileProps}>
      {children}
    </profileContext.Provider>
  );
};
