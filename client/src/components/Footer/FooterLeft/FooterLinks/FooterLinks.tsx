// @flow
// import * as React from 'react';

import { Box, Typography } from '@mui/material';

export const FooterLinks = () => (
  <>

    <Typography component="p" className="footer-links">
      <a href="/">Home</a>
      {' '}
      |
      {' '}
      <a href="/">Services</a>
      {' '}
      |
      {' '}
      <a href="/">Our Services</a>
    </Typography>
    <Typography component="p" className="footer-company-name">
      Copyright ©️ 2022
      <Box fontWeight="fontWeightMedium" display="inline">
        <br />
        Vet Team-6 All rights reserved
      </Box>
    </Typography>

  </>
);
