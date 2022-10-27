import {
  FormControl, InputLabel, MenuItem,
  TextField, Select, InputAdornment, OutlinedInput, IconButton, Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import { toast } from 'react-toastify';
import IAuth from '../../Interfaces/IAuth';
import { authContext } from '../../hooks/useAuth';
import Doctor from './DoctorInfo';
import { SignInValid } from '../../Validation';

const SignUp = ({ open }:{open :Function}) => {
  const { signUp } = React.useContext(authContext);
  const [next, setNext] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<IAuth>({
    name: '',
    password: '',
    confirmPassword: '',
    role: 'USER',
    showPassword: false,
    showConfirmPassword: false,
    email: '',
  });
  const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUserData((prev: object) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event:React.SyntheticEvent) => {
    try {
      event.preventDefault();
      await SignInValid.validate(userData);
      signUp(userData, (err:any) => {
        if (userData.role === 'DOCTOR') { setNext(true); }
        if (!err && userData.role === 'USER') open(false);
      });
    } catch (err:any) {
      toast.error(err.message);
    }
  };
  const handleClickShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    (!next)
      ? (
        <form onSubmit={handleSubmit}>

          <FormControl
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            variant="outlined"
          >
            <Button
              sx={{
                color: '#356E6E',
                border: '1.5px #356E6E  solid',
                m: 1,
                width: '30ch',
              }}
              fullWidth
            >
              <img src="./google.png" alt="google" width="25px" height="25px" />
              Sign-up with Google
            </Button>
          </FormControl>
          <p style={{ textAlign: 'center', margin: '2px' }}> - Or -</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            <FormControl>
              <TextField
                size="small"
                fullWidth
                label="Name"
                name="name"
                onChange={handleState}
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch', color: '#356E6E' }}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Email"
                size="small"
                fullWidth
                id="outlined-start-adornment"
                type="text"
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
                      onMouseDown={(e) => e.preventDefault()}
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
              <InputLabel
                size="small"
                htmlFor="outlined-adornment-password"
              >
                Confirm Password

              </InputLabel>
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

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel
                size="small"
                id="demo-simple-select-helper-label"
              >
                Role

              </InputLabel>
              <Select
                size="small"
                fullWidth
                label="Role"
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

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              { (userData.role !== 'DOCTOR') ? <button type="submit" className="sign-Btn">Sign up </button> : (
                <button
                  type="submit"
                  className="sign-Btn"
                >
                  Next
                </button>
              ) }
            </FormControl>
          </div>
        </form>
      ) : <Doctor open={open} />
  );
};
export default SignUp;
