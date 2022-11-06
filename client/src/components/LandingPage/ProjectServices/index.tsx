import { Typography } from '@mui/material';
import { ServicesList } from '../components.styled';
import { ServiceArtical } from './ServiceArtical';

export const ProjectServices = () => (
  <ServicesList>
    <Typography sx={{ 'padding-top': '1rem' }} variant="h4" component="h4">
      Our Services
    </Typography>
    <ServiceArtical />
    <ServiceArtical />
    <ServiceArtical />
  </ServicesList>
);
