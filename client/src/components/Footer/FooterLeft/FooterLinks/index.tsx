import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { FooterLinksStyled } from '../../components.styled';

export const FooterLinks = () => (
  <>
    <FooterLinksStyled>
      <Link to="/">Home</Link> | <Link to="/">Doctors</Link> |{' '}
      <Link to="/">Our Services</Link>
    </FooterLinksStyled>
    <Typography component="p">
      Copyright ©️ 2022{' '}
      <Box fontWeight="fontWeightMedium" display="inline">
        Vet Team-6 All rights reserved
      </Box>
    </Typography>
  </>
);
