import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const CircularDeterminate = ({ value }:{value:number}) => (
  <Stack spacing={2} direction="row">
    <CircularProgress variant="determinate" value={value} />

  </Stack>
);
export default CircularDeterminate;
