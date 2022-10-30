// import { Box } from '@mui/material';

import { FooterBox } from '../components.styled';
import { About } from './About';
import { FooterIcons } from './FooterIcons';

export const FooterRight = () => (
  <FooterBox>
    <About />
    <FooterIcons />
  </FooterBox>
);
