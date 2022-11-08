import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { LogoImage } from '../components.styled';

export const Logo = () => (
  <Box className="logo">
    <Link to="/">
      <LogoImage src="./logo.png" alt="hello" />
    </Link>
  </Box>
);
