import { Modal, Box, Typography } from '@mui/material';
import { useContext } from 'react';
import styleModal from '../../../helpers/PopStyle';
import { profileContext } from '../../../hooks/useProfileInfo';
import Doctor from './DoctorInfo';

const EditProfile = () => {
  const { open, setOpen } = useContext(profileContext);
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box sx={{ height: 500, width: 400, ...styleModal }}>
        <Typography color="primary"> Edit Profile </Typography>
        <Doctor />
      </Box>
    </Modal>
  );
};

export default EditProfile;
