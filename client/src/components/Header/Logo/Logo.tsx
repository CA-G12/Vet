import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Logo.css';

export const Logo = () => (
  <Box className="logo">
    <Link to="/">
      <img src="./logo.png" alt="hello" />
    </Link>
  </Box>
);
