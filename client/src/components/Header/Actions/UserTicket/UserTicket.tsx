// @flow
// import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const actionsStyle = {
  display: 'flex',
  'flex-direction': 'row',
  'align-items': 'center',
  'text-align': 'center',
  gap: '0.1rem',
  '@media screen and (max-width:450px)': {
    gap: '0.1rem',
    'font-size': '0.5rem',
  },
};
const username = {
  'padding-top': '0.4rem',
  '@media screen and (max-width:850px)': {
    'font-size': '1rem',
  },
  '@media screen and (max-width:450px)': {
    'font-size': '0.5rem',
  },
};
const avatar = {
  width: 40,
  height: 40,
  '@media screen and (max-width:850px)': {
    width: 25,
    height: 25,
  },
  '@media screen and (max-width:450px)': {
    width: 23,
    height: 23,
  },
};
export const UserTicket = () => (
  <Box sx={actionsStyle}>
    <Avatar sx={avatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
    <Typography sx={username} gutterBottom variant="h5" component="div">
      Saeid
    </Typography>
  </Box>
);
