import { FooterLinks } from './FooterLinks';
import { Logo } from '../../Header/Logo';

import { FooterBox } from '../components.styled';

export const FooterLeft = () => (
  <FooterBox>
    <Logo />
    <FooterLinks />
  </FooterBox>
);
