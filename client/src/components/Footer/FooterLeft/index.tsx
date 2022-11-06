import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Logo } from '../../Header/Logo';
import { FooterBox, FooterLinksStyled } from '../components.styled';

export const FooterLeft = () => (
  <FooterBox>
    <Logo />
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
  </FooterBox>
);
