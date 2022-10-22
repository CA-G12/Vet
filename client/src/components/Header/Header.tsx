import './NavHeader/NavHeader.css';
import { Logo } from './Logo/Logo';
import { Actions } from './Actions/Actions';
import { NavHeader } from './NavHeader/NavHeader';

export const Header = () => (
  <header className="nav-bar">
    <Logo />
    <NavHeader />
    <Actions />
  </header>
);
