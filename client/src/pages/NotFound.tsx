import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import notfound from '../assets/notFound.png';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeee4',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" style={{ color: '#2D9B9B' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: '#2D9B9B' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FDD853',
            color: '#2D9B9B',
          }}
        >
          Back Home
        </Button>
      </Link>
      <img
        src={notfound}
        alt="not found"
        style={{ width: '30vw', right: '55%' }}
      />
    </Box>
  );
};
export default NotFound;
