import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import userTicketStyles from './UserTicketStyle';
import IAuth from '../../../../Interfaces/IAuth';

type props = {
  user:IAuth | null | undefined
}

export const UserTicket = ({ user }:props) => (
  <Box sx={userTicketStyles.actionsStyle}>
    <Avatar sx={userTicketStyles.avatar} alt="Remy Sharp" src={user?.avatar} />
    <Typography sx={userTicketStyles.username} gutterBottom variant="h5" component="div">
      {user?.name}
    </Typography>
  </Box>
);
