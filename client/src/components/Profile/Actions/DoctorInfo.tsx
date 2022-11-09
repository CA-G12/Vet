import React, { useState, useContext } from 'react';
import { FormControl, TextField, Button, Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import '../../Popup/style.css';
import ImageIcon from '@mui/icons-material/Image';
import { toast } from 'react-toastify';
import { DoctorInfo } from '../../../Validation';
import ApiService from '../../../services/ApiService';
import { authContext } from '../../../hooks/useAuth';
import uploadImage from '../../../helpers/uploadImage';
import JwtService from '../../../services/JwtService';
import { profileContext } from '../../../hooks/useProfileInfo';
import IUser from '../../../Interfaces/post/IUser';

const DoctorEdit = () => {
  const { user } = useContext(authContext);
  const { setDocInfo, docInfo, setUserInfo } = useContext(profileContext);
  const [avatarFile, setAvatarFile] = React.useState<File>();
  const [degreeFile, setDegreeFile] = React.useState<File>();
  const [progress, setProgress] = useState<number>(0);
  const [userName, setUserName] = useState<Partial<IUser>>({
    name: user?.name,
    avatar: user?.avatar,
  });
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setUserName(prev => ({ ...prev, name: value }));
    }
    setDocInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      }}
      onSubmit={async event => {
        event.preventDefault();
        try {
          if (user?.role === 'DOCTOR') {
            await DoctorInfo.validate(docInfo);
            if (degreeFile) {
              const degree = await uploadImage(degreeFile, setProgress);
              setDocInfo(prev => ({ ...prev, universityDegree: degree }));
              await ApiService.put('/doctor-info', {
                ...docInfo,
                universityDegree: degree,
                DoctorId: user?.id,
              });
            }
          }
          if (avatarFile) {
            const userAv = await uploadImage(avatarFile, setProgress);
            setUserName(() => ({ ...userName, avatar: userAv }));

            const { data } = await ApiService.put('/user', {
              ...userName,
              avatar: userAv,
            });
            setUserInfo(prev => ({ ...prev, ...userName }));
            JwtService.setToken(data.token);
          } else {
            const { data } = await ApiService.put('/user', userName);
            setUserInfo(prev => ({ ...prev, ...userName }));
            JwtService.setToken(data.token);
          }
          toast.success('Edited successfully');
        } catch (error: any) {
          toast.error(error.message);
        }
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <FormControl>
          <TextField
            label="Name"
            size="small"
            fullWidth
            id="outlined-start-adornment"
            type="text"
            value={userName.name}
            onChange={handleState}
            name="name"
            sx={{
              m: 1,
              width: '18ch',
              color: '#356E6E',
            }}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="upload-photo">
            <input
              type="file"
              accept="/image/*"
              onChange={event => {
                if (event.target.files) {
                  setAvatarFile(event.target.files[0]);
                }
              }}
              style={{ display: 'none' }}
              id="upload-photo"
              name="avatar"
            />
            <Button
              variant="outlined"
              component="span"
              sx={{ maxWidth: 210, height: '45px', fontSize: 15 }}
              endIcon={<ImageIcon />}
            >
              avatar
            </Button>
          </label>
        </FormControl>
      </Box>
      {user?.role === 'DOCTOR' ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl>
              <TextField
                label="Hour Rate"
                size="small"
                fullWidth
                id="outlined-start-adornment"
                value={docInfo?.hourRate}
                type="text"
                name="hourRate"
                onChange={handleState}
                sx={{
                  m: 1,
                  width: '10ch',
                  color: '#356E6E',
                }}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="universityDegree">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={event => {
                    if (event.target.files) {
                      setDegreeFile(event.target.files[0]);
                    }
                  }}
                  style={{ display: 'none' }}
                  id="universityDegree"
                  name="universityDegree"
                />
                <Button
                  variant="outlined"
                  component="span"
                  sx={{ maxWidth: 203, height: '45px', fontSize: 15 }}
                  endIcon={<ImageIcon />}
                >
                  universityDegree
                </Button>
              </label>
            </FormControl>
          </Box>
          <FormControl>
            <TextField
              label="Clinic Location"
              size="small"
              fullWidth
              id="outlined-start-adornment"
              type="text"
              value={docInfo?.clinicLocation}
              name="clinicLocation"
              onChange={handleState}
              sx={{
                m: 1,
                width: '29.5ch',
                color: '#356E6E',
              }}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Work Place"
              size="small"
              fullWidth
              id="outlined-start-adornment"
              value={docInfo?.workplace}
              type="text"
              name="workplace"
              onChange={handleState}
              sx={{
                m: 1,
                width: '29.5ch',
                color: '#356E6E',
              }}
            />
          </FormControl>
        </>
      ) : null}
      <LoadingButton
        loading={progress > 0 && progress < 100}
        type="submit"
        variant="contained"
        sx={{
          width: 150,
        }}
      >
        Edit
      </LoadingButton>
    </form>
  );
};
export default DoctorEdit;
