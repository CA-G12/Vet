import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';

const LoadingPost = () => (
  <Box
    sx={{
      background: '#EFF2F2',
      margin: '20px',
      padding: '20px',
      borderRadius: '12px',
    }}
  >
    <Box display="flex" alignItems="self-end">
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        height={10}
        width="20%"
        sx={{ marginBottom: 2 }}
      />
    </Box>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      gap={1}
    >
      <Box width="100%">
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="60%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="40%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="30%"
          style={{ marginBottom: 6 }}
        />
      </Box>

      <Skeleton
        width={200}
        sx={{ height: 100, borderRadius: 4 }}
        animation="wave"
        variant="rectangular"
      />
    </Box>
  </Box>
);

export default LoadingPost;
