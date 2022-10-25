import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const FooterIcons = () => (
  <Box className="footer-icons">
    <a href="/">
      {' '}
      <FacebookIcon />
    </a>
    <a href="/">
      {' '}
      <InstagramIcon />
    </a>
    <a href="/">
      {' '}
      <LinkedInIcon />
    </a>
    <a href="/">
      {' '}
      <YouTubeIcon />
    </a>
  </Box>
);
