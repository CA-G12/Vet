// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonDoctor from './ButtonDoctor';
import UserPostInfo from './DoctorInfo';
import IUser from '../../Interfaces/post/IUser';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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

// const Index = ({ user }:{user:IUser}) => (
//   <Box sx={{ width: '100%', background: 'red' }}>
//     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//       <Grid
//         sx={{ background: 'black' }}
//         spacing={6}
//       >
//         <Paper>
//           <UserPostInfo user={user} />

//         </Paper>
//       </Grid>
//       <Grid
//         spacing={6}
//         sx={{ background: 'black' }}
//       >
//         <Paper>

//           <ButtonDoctor user={user} />

//         </Paper>
//       </Grid>
//     </Grid>
//   </Box>

// );
// export default Index;
