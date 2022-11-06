import { useContext } from 'react';

import { Logo } from './Logo';
import { Actions } from './Actions';

import { NavHeader } from './NavHeader';
import PopUp from '../Popup/Popup';
import { authContext } from '../../hooks/useAuth';

import { StyledHeader } from './components.styled';

export const Header = () => {
  const { open, setOpen } = useContext(authContext);

  const handleOpen = () => setOpen(true);
  return (
    <StyledHeader>
      <Logo />
      <NavHeader />
      <Actions handleOpen={handleOpen} />
      <PopUp open={open} setOpen={setOpen} />
    </StyledHeader>
  );
};
