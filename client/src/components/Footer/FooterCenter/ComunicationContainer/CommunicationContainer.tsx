// @flow
// import * as React from 'react';

import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const CommunicationContainer = () => (
  <>
    <Box sx={{ display: 'flex', 'align-items': 'center', gap: '0.2rem' }}>
      <LocationOnIcon />
      <Typography component="p">
        <strong>Palestine </strong>
        Gaza
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', 'align-items': 'center', gap: '0.2rem' }}>
      <StayPrimaryPortraitIcon />
      <Typography>+97 059 926 6293</Typography>
    </Box>
    <Box sx={{ display: 'flex', 'align-items': 'center', gap: '0.2rem' }}>
      <MailOutlineIcon />
      <Typography><a href="/">saed.dev9@gmail.com</a></Typography>
    </Box>
  </>
);
