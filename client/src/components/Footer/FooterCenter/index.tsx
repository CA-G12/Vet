import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { EmailLink, SimpleFlexBox, FooterBox } from '../components.styled';

export const FooterCenter = () => (
  <FooterBox>
    <SimpleFlexBox>
      <LocationOnIcon />
      <Typography component="p">
        <strong>Palestine </strong>
        Gaza
      </Typography>
    </SimpleFlexBox>
    <SimpleFlexBox>
      <StayPrimaryPortraitIcon />
      <Typography>+97 059 926 6293</Typography>
    </SimpleFlexBox>
    <SimpleFlexBox>
      <MailOutlineIcon />
      <Typography>
        <EmailLink href="/">saed.dev9@gmail.com</EmailLink>
      </Typography>
    </SimpleFlexBox>
  </FooterBox>
);
