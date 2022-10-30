import { Link } from 'react-router-dom';
import IUser from '../../Interfaces/post/IUser';

const ButtonDoctor = ({
  user,
  isEmergency,
}: {
  user: IUser;
  isEmergency: boolean;
}) => (
  <Link
    style={{
      textDecoration: 'none',
      color: 'white',
      padding: '5px 20px',
      background: '#2D9B9B',
      borderRadius: 8,
    }}
    to={!isEmergency ? `/users/${user?.id}` : '/livechat'}
  >
    {!isEmergency ? `Visit` : 'Connect'}
  </Link>
);

export default ButtonDoctor;
