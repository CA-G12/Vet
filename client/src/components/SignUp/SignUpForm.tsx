import {
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../../hooks/useAuth';
import Doctor from './SignupDoctor';
import { SignUpValid } from '../../Validation';
import { SignUp as ISignUp } from '../../Interfaces/IAuthCon';

type SignUpState = ISignUp & {
  showPassword: boolean;
};

const SignUp = () => {
  const { signUp, setOpen } = React.useContext(authContext);
  const [next, setNext] = React.useState<boolean>(false);
  const [signUpData, setSignUpData] = React.useState<SignUpState>({
    name: '',
    password: '',
    confirmPassword: '',
    role: 'USER',
    email: '',
    showPassword: false,
  });
  const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();
      const validated = await SignUpValid.validate(signUpData);
      await signUp(validated);
      if (validated.role === 'DOCTOR') {
        setNext(true);
      }
      if (validated.role === 'USER') setOpen(false);
    } catch (err) {
      toast.error((err as Error).message);
    }
  };
  const handleClickShowPassword = () => {
    setSignUpData(prev => ({
      ...prev,
      showPassword: prev.showPassword,
    }));
  };

  return !next ? (
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
      <div
        style={{
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
          <InputLabel size="small" htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="password"
            size="small"
            fullWidth
            id="outlined-adornment-password"
            type={signUpData.showPassword ? 'text' : 'password'}
            onChange={handleState}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={e => e.preventDefault()}
                  edge="end"
                  name="password"
                >
                  {signUpData.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel size="small" htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            size="small"
            fullWidth
            name="confirmPassword"
            id="outlined-adornment-password"
            type={signUpData.showPassword ? 'text' : 'password'}
            onChange={handleState}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  name="confirmPassword"
                  onMouseDown={e => {
                    e.preventDefault();
                  }}
                  edge="end"
                >
                  {signUpData.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label=" confirm Password"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel size="small" id="demo-simple-select-helper-label">
            Role
          </InputLabel>
          <Select
            size="small"
            fullWidth
            label="Role"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="role"
            value={signUpData.role}
            onChange={e =>
              setSignUpData({ ...signUpData, role: e.target.value as string })
            }
          >
            <MenuItem value="USER">User</MenuItem>
            <MenuItem value="DOCTOR">Doctor</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          {signUpData.role !== 'DOCTOR' ? (
            <button type="submit" className="sign-Btn">
              Sign up{' '}
            </button>
          ) : (
            <button type="submit" className="sign-Btn">
              Next
            </button>
          )}
        </FormControl>
      </div>
    </form>
  ) : (
    <Doctor open={setOpen} />
  );
};
export default SignUp;
