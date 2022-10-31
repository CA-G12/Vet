import { Link } from 'react-router-dom';

const ButtonDoctor = ({
  id,
  isEmergency,
}: {
  id: number;
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
    to={!isEmergency ? `/users/${id}` : '/livechat'}
  >
    {!isEmergency ? `Visit` : 'Connect'}
  </Link>
);

export default ButtonDoctor;
