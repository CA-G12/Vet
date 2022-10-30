import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { FooterIconsBox } from '../../components.styled';

export const FooterIcons = () => (
  <FooterIconsBox>
    <Link to="/">
      <FacebookIcon sx={{ color: '#1877F2' }} />
    </Link>
    <Link to="/">
      <InstagramIcon sx={{ color: '#F00073' }} />
    </Link>
    <Link to="/">
      <LinkedInIcon sx={{ color: '#2867B2' }} />
    </Link>
    <Link to="/">
      <YouTubeIcon sx={{ color: 'red' }} />
    </Link>
  </FooterIconsBox>
);
