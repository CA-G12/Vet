import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import { useLocation } from 'react-router-dom';
import { authContext } from '../../../hooks/useAuth';

import { FireCall } from './FireCall/FireCall';
import { Search } from './Search/Search';

import { UserTicket } from './UserTicket/UserTicket';
import { AuthButtons } from './AuthButtons/AuthButtons';

import ActionsStyles from './ActionsStyles';
// import IAuth from '../../../Interfaces/IAuth';

export const Actions = () => {
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
      setIsLandingPage(true);
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

  return (
    <Box sx={ActionsStyles.actionsStyle}>
      {isLandingPage ? <Search /> : null}
      {isAdminDashboard ? <FireCall /> : null}
      {isAuth ? <UserTicket user={user} /> : null}
      {!isAuth ? <AuthButtons /> : null}
    </Box>
  );
};
