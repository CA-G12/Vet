import { Box, Typography } from '@mui/material';
import styles from './styles';
import './serviceArtical.css';

export const ServiceArtical = () => (
  <Box sx={styles.cardContainer} className="service-card">
    <Typography component="p" sx={{ width: '30rem', 'margin-top': '1.5rem', 'font-size': '20px' }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
      possimus temporibus laboriosam quaerat eos perspiciatis iusto repellendus
      repudiandae consequatur tempore
      magnam optio, voluptates accusantium natus officia placeat,
      architecto quisquam. Libero?
    </Typography>
    <img style={styles.serviceImg} src="https://images.unsplash.com/photo-1666681179847-8faf01f0719e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="lion" />
  </Box>
);
