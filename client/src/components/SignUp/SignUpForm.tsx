import {
  FormControl, InputLabel, MenuItem, Button,
} from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import IAuth from '../../Interfaces/auth';
import { SignUpValid } from '../../Validation';

const FormControlStyle = {
  m: 1,
  width: '25ch',
};
const googleBtnStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};
const SignUp = () => {
  const [userData, setUserData] = React.useState<IAuth>({
    name: '',
    password: '',
    confirmPassword: '',
    role: 'USER',
    showPassword: false,
    showConfirmPassword: false,
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

  return (
    <form
      className="formContainer"
      onSubmit={(e) => {
        SignUpValid.validate(userData)
          .then(() => toast('WellCome !'))
          .catch((err:any) => {
            e.preventDefault();
            toast(err.message);
          });
      }}
    >
      <p className="Sign"> Sign in to your Account</p>

      <FormControl sx={googleBtnStyle} variant="outlined">
        <Button sx={{ FormControlStyle }} fullWidth>
          <img src="./google.png" alt="google" width="25px" height="25px" />
          Continue with Google
        </Button>
      </FormControl>
      <FormControl>
        <TextField
          size="small"
          fullWidth
          label="Name"
          name="name"
          onChange={handleState}
          id="outlined-start-adornment"
          sx={{ FormControlStyle }}
        />
      </FormControl>
      <FormControl>
        <TextField
          label="Email"
          size="small"
          fullWidth
          id="outlined-start-adornment"
          type="email"
          name="email"
          onChange={handleState}
          sx={{ FormControlStyle }}
        />
      </FormControl>
      <FormControl sx={{ FormControlStyle }} variant="outlined">
        <InputLabel size="small" htmlFor="outlined-adornment-password">Password </InputLabel>
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
                onMouseDown={(e) => { e.preventDefault(); }}
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
      <FormControl sx={{ FormControlStyle }} variant="outlined">
        <InputLabel size="small" htmlFor="outlined-adornment-password">   Confirm Password  </InputLabel>
        <OutlinedInput
          size="small"
          fullWidth
          name="confirmPassword"
          id="outlined-adornment-password"
          type={userData.showConfirmPassword ? 'text' : 'password'}
          onChange={handleState}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                name="confirmPassword"
                onMouseDown={(e) => { e.preventDefault(); }}
                edge="end"
              >
                {userData.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            )}
          label=" confirm Password"
        />
      </FormControl>

      <FormControl sx={{ FormControlStyle }} variant="outlined">
        <InputLabel size="small" id="demo-simple-select-helper-label"> Role </InputLabel>
        <Select
          size="small"
          fullWidth
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          name="role"
          value={userData.role}
          onChange={(e) => setUserData({ ...userData, role: e.target.value as string })}
        >
          <MenuItem value="USER">User</MenuItem>
          <MenuItem value="DOCTOR">Doctor</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ FormControlStyle }} variant="outlined">
        <button type="submit">Sign up </button>
      </FormControl>
    </form>
  );
};
export default SignUp;
