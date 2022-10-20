import Avatar from '@mui/material/Avatar';
import User from '../../Interfaces/User';

const Username = ({ name, avatar }:User) => (
  <div style={{ display: 'flex' }}>
    <Avatar alt={name} src={avatar} />
    <span style={{ alignSelf: 'center', paddingLeft: '10px' }}>
      {name}
    </span>
  </div>
);
export default Username;
