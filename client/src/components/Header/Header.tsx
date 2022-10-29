// import './NavHeader/styles.css';
import { Logo } from './Logo';
import { Actions } from './Actions';
import { NavHeader } from './NavHeader';
import { StyledHeader } from './components.styled';

export const Header = () => (
  <StyledHeader>
    <Logo />
    <NavHeader />
    <Actions />
  </StyledHeader>
);
