import {
  FormControl, InputLabel,
} from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import IAuth from '../../Interfaces/auth';
import { SignInValid } from '../../Validation';

const SignIn = () => {
  const [userData, setUserData] = React.useState<IAuth>({
    showPassword: false,
    password: '',
    email: '',
  });
  const handleState = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserData((prev:object) => ({ ...prev, [name]: value }));
  };
  const handleClickShowPassword = (e:React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === 'password') {
      setUserData({
        ...userData,
        showPassword: !userData.showPassword,
      });
    } else {
      setUserData({
        ...userData,
        showConfirmPassword: !userData.showConfirmPassword,
      });
    }
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      SignInValid.validate(userData)
        .then(() => toast.success('WellCome !'))
        .catch((err:any) => {
          toast.error(err.message);
        });
    }}
    >
      <FormControl>
        <TextField
          label="Email"
          size="small"
          fullWidth
          id="outlined-start-adornment"
          type="email"
          name="email"
          onChange={handleState}
          sx={{ m: 1, width: '25ch', color: '#356E6E' }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel
          size="small"
          htmlFor="outlined-adornment-password"
        >
          Password

        </InputLabel>
        <OutlinedInput
          name="password"
          size="small"
          fullWidth
          id="outlined-adornment-password"
          type={userData.showPassword ? 'text' : 'password'}
          onChange={handleState}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                name="password"
              >
                {userData.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            )}
          label="Password"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <button type="submit"> Sign up </button>
      </FormControl>
    </form>
  );
};
export default SignIn;
