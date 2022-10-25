import { Box } from '@mui/material';

import { About } from './About/About';
import { FooterIcons } from './FooterIcons/FooterIcons';

export const FooterRight = () => (
  <Box className="footer-right">
    <About />
    <FooterIcons />
  </Box>
);
