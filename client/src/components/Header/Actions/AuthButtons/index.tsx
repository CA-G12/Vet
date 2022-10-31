import { MouseEventHandler } from 'react';

import {
  AuthButtonsBox,
  LoginButton,
  SignUpButton,
} from '../../components.styled';

type Props = {
  handleOpen: MouseEventHandler<HTMLButtonElement>;
};
export const AuthButtons = (props: Props) => {
  const { handleOpen } = props;
  return (
    <AuthButtonsBox>
      <LoginButton onClick={handleOpen} variant="outlined">
        Login
      </LoginButton>
      <SignUpButton onClick={handleOpen} variant="contained">
        SignUp
      </SignUpButton>
    </AuthButtonsBox>
  );
};
