import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonDoctor from './ButtonDoctor';
import UserPostInfo from './DoctorInfo';
import IUser from '../../Interfaces/post/IUser';

const Index = ({ user }:{user:IUser}) => (
  <Box sx={{ width: '80%' }}>
    <Grid sx={{ alignItems: 'center' }} container rowSpacing={1}>
      <Grid xs={6}>
        <UserPostInfo user={user} />
      </Grid>
      <Grid xs={2}>
        <ButtonDoctor user={user} />
      </Grid>
    </Grid>
  </Box>
);
export default Index;
