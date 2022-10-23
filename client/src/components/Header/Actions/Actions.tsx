import Box from '@mui/material/Box';
import { FireCall } from './FireCall/FireCall';
import { Search } from './Search/Search';

import { UserTicket } from './UserTicket/UserTicket';
import { AuthButtons } from './AuthButtons/AuthButtons';

import ActionsStyles from './ActionsStyles';

export const Actions = () => {
  const fireCall = true;
  const search = true;
  const userTicket = false;
  const authButtons = true;
  return (
    <Box sx={ActionsStyles.actionsStyle}>
      {search ? <Search /> : null}
      {fireCall ? <FireCall /> : null}
      {userTicket ? <UserTicket /> : null}
      {authButtons ? <AuthButtons /> : null}
    </Box>
  );
};
