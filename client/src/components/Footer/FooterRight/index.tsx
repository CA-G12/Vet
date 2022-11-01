import { Link, Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  FooterBox,
  TiteledPargraph,
  FooterIconsBox,
} from '../components.styled';

export const FooterRight = () => (
  <FooterBox>
    <TiteledPargraph>
      <Typography component="span">About The Company</Typography>
      <strong>Saed Developer</strong> A web developer where you can find more
      creative CSS Animation and Effects along with HTML, JavaScript and
      Projects Using Node Js, React Js.
    </TiteledPargraph>
    <FooterIconsBox>
      <Link href="/">
        <FacebookIcon sx={{ color: '#1877F2' }} />
      </Link>
      <Link href="/">
        <InstagramIcon sx={{ color: '#F00073' }} />
      </Link>
      <Link href="/">
        <LinkedInIcon sx={{ color: '#2867B2' }} />
      </Link>
      <Link href="/">
        <YouTubeIcon sx={{ color: 'red' }} />
      </Link>
    </FooterIconsBox>
  </FooterBox>
);
