// @flow
// import React from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const actionsStyle = {
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'space-between',
  'align-items': 'center',
  gap: '1rem',
  '@media screen and (max-width:850px)': {
    gap: '0.5rem',
    'padding-left': '0.3rem',
  },
};
const signUp = {
  'background-color': '#D53449',
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',

    padding: '0.1rem',
  },
};
const signIn = {
  color: '#D53449',
  'border-color': '#D53449',
  '@media screen and (max-width:450px)': {
    'font-size': '0.45rem',
    padding: '0.1rem',
  },
};
export const AuthButtons = () => (
  <Box sx={actionsStyle}>
    <Button sx={signIn} variant="outlined">Login</Button>
    <Button sx={signUp} variant="contained">SignUp</Button>
  </Box>
);
