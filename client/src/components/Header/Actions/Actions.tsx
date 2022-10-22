// @flow

// import { useState } from 'react';
import Box from '@mui/material/Box';
import { FireCall } from './FireCall/FireCall';
import { Search } from './Search/Search';
import { UserTicket } from './UserTicket/UserTicket';
import { AuthButtons } from './AuthButtons/AuthButtons';

// import React from 'react';
// align-self: end;
const actionsStyle = {
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'align-items': 'center',
  gap: '0.5',
  '@media screen and (max-width:850px)': {
    'margin-left': 'auto',
    gap: '0',
  },
};
export const Actions = () => {
  const fireCall = false;
  const search = false;
  const userTicket = true;
  const authButtons = true;
  return (
    <Box sx={actionsStyle}>
      {search ? <Search /> : null}
      {fireCall ? <FireCall /> : null}
      {userTicket ? <UserTicket /> : null}
      {authButtons ? <AuthButtons /> : null}
    </Box>
  );
};
