import {
  AuthButtonsBox,
  LoginButton,
  SignUpButton,
} from '../../components.styled';

export const AuthButtons = () => (
  <AuthButtonsBox>
    <LoginButton variant="outlined">Login</LoginButton>
    <SignUpButton variant="contained">SignUp</SignUpButton>
  </AuthButtonsBox>
);
