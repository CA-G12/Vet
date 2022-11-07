import { Link } from 'react-router-dom';

const ButtonDoctor = ({ id }: { id: number }) => (
  <Link
    style={{
      textDecoration: 'none',
      color: 'white',
      padding: '5px 20px',
      background: '#2D9B9B',
      borderRadius: 8,
    }}
    to={`/users/${id}`}
  >
    Visit
  </Link>
);

export default ButtonDoctor;
