import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import IUser from '../../Interfaces/post/IUser';

const UserAvatar = ({ user }: { user: IUser | null | undefined }) => {
  return (
    <NavLink style={{ textDecoration: 'none' }} to={`/users/${user?.id}`}>
      <Box display="flex" alignItems="center">
        <Box>
          <Avatar
            sx={{ width: '50px', height: '50px' }}
            alt={user?.name}
            src={user?.avatar}
          />
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          justifyContent="space-around"
        >
          <Typography
            color="primary"
            paddingLeft="10px"
            variant="h6"
            gutterBottom
          >
            {user?.name}{' '}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '60px' }}
          >
            <Typography
              color="primary"
              paddingLeft="10px"
              variant="subtitle2"
              gutterBottom
              display="flex"
              alignItems="center"
            >
              <FmdGoodIcon />
              {user?.Doctor?.workplace}
            </Typography>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
};
export default UserAvatar;
