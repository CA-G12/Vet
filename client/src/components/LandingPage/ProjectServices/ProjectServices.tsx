// @flow
// import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { ServiceArtical } from './ServiceArtical/ServiceArtical';
import styles from './styles';

export const ProjectServices = () => (
  <Box sx={styles.container}>
    <Typography sx={{ 'padding-top': '1rem' }} variant="h2" component="h2">Our Services</Typography>
    <ServiceArtical />
    <ServiceArtical />
    <ServiceArtical />
  </Box>
);
