import { useContext } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { profileContext } from '../../../hooks/useProfileInfo';

const DoctorProfile = () => {
  const { docInfo, userInfo } = useContext(profileContext);
  const style = {
    display: 'flex',
    width: '350px',
    flexDirection: 'column',
  };
  const TypoStyle = {
    textAlign: 'start',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };
  return (
    <Box
      marginLeft="10%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="100px"
    >
      <Box sx={style}>
        <Typography sx={TypoStyle}>
          <LocationOnIcon color="disabled" fontSize="small" />
          {docInfo.clinicLocation}
        </Typography>
        <Typography sx={TypoStyle}>
          <AttachMoneyIcon color="disabled" />
          {docInfo.hourRate}
        </Typography>
      </Box>
      <Box sx={style}>
        <Typography sx={TypoStyle}>
          <LocationCityIcon color="disabled" />
          {docInfo.workplace}
        </Typography>
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
      </Box>
    </Box>
  );
};
export default DoctorProfile;
