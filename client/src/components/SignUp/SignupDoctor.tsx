import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@mui/material';
import '../Popup/style.css';
import ImageIcon from '@mui/icons-material/Image';
import { toast } from 'react-toastify';
import { DoctorInfo } from '../../Validation';
import ApiService from '../../services/ApiService';
import { authContext } from '../../hooks/useAuth';
import uploadImage from '../../helpers/uploadImage';
import IDoctorInfo from '../../Interfaces/doctor/IDoctorInfo';

const Doctor = ({ open }: { open: Function }) => {
  const { user } = React.useContext(authContext);
  const [degreeFile, setDegreeFile] = useState<File>();
  const [progress, setProgress] = useState<number>(0);
  const [doctorInfo, setDoctorInfo] = useState<IDoctorInfo>({
    clinicLocation: '',
    workplace: '',
    hourRate: '',
    DoctorId: 0,
  });
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setDoctorInfo((prev: object) => ({
      ...prev,
      [name]: value,
      DoctorId: user?.id,
    }));
  };
  return (
    <form
      onSubmit={async event => {
        event.preventDefault();
        try {
          await DoctorInfo.validate(doctorInfo);
          if (degreeFile) {
            const degree = await uploadImage(degreeFile, setProgress);
            await ApiService.post('/doctor-info', {
              ...doctorInfo,
              universityDegree: degree,
              DoctorId: user?.id,
            });
            open(false);
          }
        } catch (error: any) {
          toast.error(error.message);
        }
      }}
    >
      <FormControl>
        <TextField
          label="Clinic Location"
          size="small"
          fullWidth
          id="outlined-start-adornment"
          type="text"
          name="clinicLocation"
          onChange={handleState}
          sx={{
            m: 1,
            width: '25ch',
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
          type="text"
          name="workplace"
          onChange={handleState}
          sx={{
            m: 1,
            width: '25ch',
            color: '#356E6E',
          }}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Hour Rate"
          size="small"
          fullWidth
          id="outlined-start-adornment"
          type="text"
          name="hourRate"
          onChange={handleState}
          sx={{
            m: 1,
            width: '25ch',
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
            sx={{
              m: 1,
              width: '29ch',
              backgroundColor: '#FDD853',
              border: 'none',
              borderRadius: '5px',
            }}
            endIcon={<ImageIcon />}
          >
            University Degree
          </Button>
        </label>
      </FormControl>
      <br />
      <button type="submit" className="sign-Doctor">
        Sign up
      </button>
    </form>
  );
};
export default Doctor;
