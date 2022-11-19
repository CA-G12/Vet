import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { LogoImage } from '../components.styled';
import logo from '../../../assets/logo.png';

export const Logo = () => (
  <Box className="logo">
    <Link to="/">
      <LogoImage src={logo} alt="hello" />
    </Link>
  </Box>
);
