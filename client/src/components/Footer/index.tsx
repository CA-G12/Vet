import { StyledFooter } from './components.styled';
import { FooterCenter } from './FooterCenter';

import { FooterLeft } from './FooterLeft';
import { FooterRight } from './FooterRight';

export const Footer = () => (
  <StyledFooter>
    <FooterLeft />
    <FooterCenter />
    <FooterRight />
  </StyledFooter>
);
