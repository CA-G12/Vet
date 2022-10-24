import {
  FormControl, InputLabel, TextField, InputAdornment, OutlinedInput, IconButton, Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import IAuth from '../../Interfaces/IAuth';
import { authContext } from '../../hooks/useAuth';
import { SignInValid } from '../../Validation';

const SignIn = ({ open }:{open :Function}) => {
  const [userData, setUserData] = React.useState<IAuth>({
    showPassword: false,
    password: '',
    email: '',
  });
  const { signIn } = useContext(authContext);
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
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={async (event) => {
      event.preventDefault();
      try {
        await SignInValid.validate(userData);
        signIn(userData, (err:any) => {
          if (!err) open(false);
        });
      } catch (error:any) {
        toast.error(error.message);
      }
    }}
    >
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
          Sign-in with Google
        </Button>
      </FormControl>
      <p style={{ textAlign: 'center', marginBottom: '10px' }}> - Or -</p>
      <FormControl>
        <TextField
          label="Email"
          size="small"
          fullWidth
          id="outlined-start-adornment"
          type="text"
          name="email"
          onChange={handleState}
          sx={{
            m: 1, width: '25ch', color: '#356E6E',
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch', marginBottom: '10px' }} variant="outlined">
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
        <button type="submit" className="sign-Btn"> Sign in </button>
      </FormControl>
    </form>
  );
};
export default SignIn;
