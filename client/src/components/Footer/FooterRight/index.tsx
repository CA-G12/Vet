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
      <Typography component="span">About Us</Typography>
      <strong>Paws</strong> Paws Community Care to Your Pet, It cares about pet
      owners, and offers a lot of advantages for pet owners, by creating a
      community dedicated to them, and aims to help and educate the pet owner,
      through special medical advice and consultations, and also add some kind
      of jokes to them.
    </TiteledPargraph>
    <FooterIconsBox>
      <Link href="https://www.facebook.com/profile.php?id=100083695861528">
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
