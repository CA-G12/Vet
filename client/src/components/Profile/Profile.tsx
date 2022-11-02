import React, { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Typography } from '@mui/material/';
import { authContext } from '../../hooks/useAuth';
import { ProfileTabs } from './ProfileTabs';
import './style.css';
import ApiServices from '../../services/ApiService';

interface IDoctorInfo {
  workplace: string;
  clinicLocation: string;
  hourRate: string;
}
const style = {
  display: 'flex',
  width: '450px',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
};
export const Profile = () => {
  const { user } = React.useContext(authContext);
  const [docInfo, setDocInfo] = React.useState<IDoctorInfo>({
    workplace: '',
    clinicLocation: '',
    hourRate: '',
  });
  useEffect(() => {
    const doctorInfo = async () => {
      if (user?.role === 'DOCTOR') {
        const { data } = await ApiServices.get(`/user/${user?.id}`);
        setDocInfo(data.doctorInfo);
      }
    };
    if (user) doctorInfo();
  }, [user]);
  return (
    <Box>
      <Box className="profile-content">
        <Box alignItems="center" display="flex" flexDirection="column">
          <Box>
            <img src={user?.avatar} alt="user" className="user-avatar" />
            <h3>{user?.name}</h3>
          </Box>
          {user?.role === 'DOCTOR' ? (
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              alignItems="center"
            >
              <Box sx={style}>
                <Typography sx={{ padding: '10px' }}>
                  <LocationOnIcon color="disabled" fontSize="small" />{' '}
                  {docInfo.clinicLocation}
                </Typography>
                <Typography>
                  <LocationCityIcon color="disabled" />
                  {docInfo.workplace}
                </Typography>
              </Box>
              <Box sx={style}>
                <Typography>
                  {' '}
                  <AttachMoneyIcon color="disabled" />
                  {docInfo.hourRate}
                </Typography>
                <Typography>
                  <MailOutlineIcon color="disabled" /> {user?.email}
                </Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
        <Box>
          <ProfileTabs />
        </Box>
      </Box>
    </Box>
  );
};
