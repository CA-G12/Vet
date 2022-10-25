import { Box } from '@mui/material';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { TeamName } from './TeamName/TeamName';

export const FooterLeft = () => (
  <Box className="footer-left">
    <TeamName />
    <FooterLinks />
  </Box>
);
