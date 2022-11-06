import { useContext, useEffect, useState, MouseEventHandler } from 'react';

import { useLocation } from 'react-router-dom';
import { authContext } from '../../../hooks/useAuth';

import { FireCall } from './FireCall';
import { Search } from './Search';

import { UserTicket } from './UserTicket';
import { AuthButtons } from './AuthButtons';

import { ActionsBox } from '../components.styled';

type Props = {
  handleOpen: MouseEventHandler<HTMLButtonElement>;
};
export const Actions = (props: Props) => {
  const { user } = useContext(authContext);
  const [isAuth, setIsAuth] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [isAdminDashboard, setIsAdminDashboard] = useState(true);
  const location = useLocation();

  // handle user isAuth
  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);
  // handle route pathName
  useEffect(() => {
    // condition to change isLandingPage
    if (location.pathname === '/') {
      setIsLandingPage(false);
    } else {
      setIsLandingPage(true);
    }
    // condition to change isAdminDashboard
    if (location.pathname === '/admin/dashboard') {
      setIsAdminDashboard(false);
    } else {
      setIsAdminDashboard(true);
    }
  }, [location]);
  const { handleOpen } = props;
  return (
    <ActionsBox>
      {isLandingPage ? <Search /> : null}
      {isAdminDashboard ? <FireCall /> : null}
      {isAuth ? <UserTicket user={user} /> : null}
      {!isAuth ? <AuthButtons handleOpen={handleOpen} /> : null}
    </ActionsBox>
  );
};
