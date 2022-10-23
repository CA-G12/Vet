import {
  FormControl, InputLabel, MenuItem, Button,
  TextField, Select, InputAdornment, OutlinedInput, IconButton,
} from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import IAuth from '../../Interfaces/IAuth';
import { authContext } from '../../hooks/useAuth';

const SignUp = () => {
  const { signUp } = React.useContext(authContext);

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
    <form
      style={{ marginLeft: '30px' }}
      className="formContainer"
      onSubmit={(event) => {
        event.preventDefault();
        signUp(userData);
      }}
    >
      <p className="Sign"> Sign in to your Account</p>
      <FormControl>
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
              border: '1px #356E6E  solid',
            }}
            fullWidth
          >
            <img src="./google.png" alt="google" width="25px" height="25px" />
            Continue with Google
          </Button>
        </FormControl>
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
        <button type="submit">Sign up </button>
      </FormControl>
    </form>
  );
};
export default SignUp;
