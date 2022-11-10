import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { authContext } from '../../../hooks/useAuth';
import { UserPosts } from '../Actions/UserPosts';
import IAuth from '../../../Interfaces/IAuth';
import UserTabProfile from './UserTabProfile';
import DoctorTabProfile from './DoctorTabProfile';

export const ProfileTabs = ({ userInfo }: { userInfo: IAuth }) => {
  const params = useParams();
  const [value, setValue] = useState('1');
  const { user } = useContext(authContext);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {user?.id === Number(params.id) && user?.role === 'USER' && (
        <UserTabProfile value={value} handleChange={handleChange} />
      )}

      {userInfo?.role === 'DOCTOR' && (
        <DoctorTabProfile value={value} handleChange={handleChange} />
      )}
      {user?.id !== Number(params.id) && userInfo?.role === 'USER' && (
        <UserPosts />
      )}
    </Box>
  );
};
