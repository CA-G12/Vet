import './style.css';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EditProfile from './Actions/EditProfile';
import { authContext } from '../../hooks/useAuth';
import { ProfileTabs } from './ProfileTaps/ProfileTabs';
import { profileContext } from '../../hooks/useProfileInfo';
import DoctorProfile from './Actions/DoctorProfile';

const iconStyle = {
  textAlign: 'start',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
export const Profile = () => {
  const params = useParams();
  const { user } = useContext(authContext);
  const { docInfo, userInfo, setOpen } = useContext(profileContext);

  return (
    <Box>
      {userInfo ? (
        <Box>
          <Box>
            <EditProfile />
          </Box>
          <Box className="profile-content">
            <Box alignItems="center" display="flex" flexDirection="column">
              <Box>
                <img src={userInfo.avatar} alt="user" className="user-avatar" />
                <Typography sx={iconStyle}>
                  {userInfo.name}
                  {user?.id === Number(params.id) && (
                    <EditIcon
                      color="disabled"
                      fontSize="small"
                      onClick={() => {
                        if (user?.id === Number(params.id)) setOpen(true);
                      }}
                    />
                  )}
                </Typography>
              </Box>
              {userInfo.role === 'DOCTOR' && docInfo ? (
                <DoctorProfile />
              ) : (
                <Typography
                  sx={{
                    textAlign: 'start',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <MailOutlineIcon color="disabled" />
                  {userInfo.email}
                </Typography>
              )}
            </Box>
            <Box>
              <ProfileTabs userInfo={userInfo} />
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography> User NotFound</Typography>
      )}
    </Box>
  );
};
