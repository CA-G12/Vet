import { Link } from 'react-router-dom';
import IUser from '../../Interfaces/post/IUser';

const ButtonDoctor = ({ user }: { user: IUser }) => (
  <Link
    style={{
      textDecoration: 'none',
      color: 'white',
      padding: '5px 20px',
      background: '#2D9B9B',
      borderRadius: 8,
    }}
    to={`/users/${user?.id}`}
  >
    Visit
  </Link>
);

export default ButtonDoctor;
