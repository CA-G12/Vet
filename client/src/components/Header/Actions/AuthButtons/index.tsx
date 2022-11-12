import { MouseEventHandler, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../../../../hooks/useAuth';
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
  const { signOut, user, setValue } = useContext(authContext);
  const [isAuth, setIsAuth] = useState(false);

  // handle user isAuth
  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);
  const logOutk = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await signOut();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <AuthButtonsBox>
      {isAuth ? (
        <LoginButton onClick={logOutk} variant="outlined">
          LogOut
        </LoginButton>
      ) : (
        <>
          <LoginButton
            onClick={event => {
              handleOpen(event);
              setValue('2');
            }}
            variant="outlined"
          >
            Login
          </LoginButton>
          <SignUpButton
            onClick={event => {
              handleOpen(event);
              setValue('1');
            }}
            variant="contained"
          >
            SignUp
          </SignUpButton>
        </>
      )}
    </AuthButtonsBox>
  );
};
