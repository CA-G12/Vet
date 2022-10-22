// @flow
// import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import userTicketStyles from './UserTicketStyle';

export const UserTicket = () => (
  <Box sx={userTicketStyles.actionsStyle}>
    <Avatar sx={userTicketStyles.avatar} alt="Remy Sharp" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
    <Typography sx={userTicketStyles.username} gutterBottom variant="h5" component="div">
      Saeid
    </Typography>
  </Box>
);
