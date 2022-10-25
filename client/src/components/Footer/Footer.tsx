// @flow
// import * as React from 'react';

// import { FooterCenter } from './FooterCenter/FooterCenter';
// import { FooterLeft } from './FooterLeft/FooterLeft';
// import { FooterRight } from './FooterRight/FooterRight';
import './Footer.css';
import { FooterCenter } from './FooterCenter/FooterCenter';
import { FooterLeft } from './FooterLeft/FooterLeft';
import { FooterRight } from './FooterRight/FooterRight';

//   <footer classNameName="footer-distributed">
/* <FooterLeft />
    <FooterCenter />
    <FooterRight /> */
//   </footer>
export const Footer = () => (
  <footer className="footer-distributed">
    <FooterLeft />
    <FooterCenter />
    <FooterRight />
  </footer>
);
