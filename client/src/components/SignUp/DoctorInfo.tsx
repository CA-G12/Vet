import * as React from 'react';
import { FormControl, TextField, Button } from '@mui/material';
import '../Popup/style.css';
import ImageIcon from '@mui/icons-material/Image';
import { toast } from 'react-toastify';
import { DoctorInfo } from '../../Validation';
import ApiService from '../../services/ApiService';
import { authContext } from '../../hooks/useAuth';

interface IDoctorInfo {
  doctorId?: number;
  clinicLocation?: string;
  workplace?: string;
  hourRate?: string;
  uploadPhoto?: string;
}
const Doctor = ({ open }: { open: Function }) => {
  const { user } = React.useContext(authContext);
  const [doctorInfo, setDoctorInfo] = React.useState<IDoctorInfo>({
    clinicLocation: '',
    workplace: '',
    hourRate: '',
    doctorId: 0,
  });
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setDoctorInfo((prev: object) => ({ ...prev, [name]: value }));
    doctorInfo.doctorId = user?.id;
  };
  return (
    <form
      onSubmit={async event => {
        event.preventDefault();
        try {
          await DoctorInfo.validate(doctorInfo);
          await ApiService.post('/doctor-info', doctorInfo);
          open(false);
          toast.success('done');
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
        <label htmlFor="upload-photo">
          <input
            style={{ display: 'none' }}
            id="upload-photo"
            name="uploadPhoto"
            type="file"
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
            add Image
          </Button>
        </label>
      </FormControl>
      <br />
      <button type="submit" className="sign-Doctor">
        Sign up{' '}
      </button>
    </form>
  );
};
export default Doctor;
