import { Link } from 'react-router-dom';

const ConnectBtn = ({ id }: { id: number }) => (
  <Link
    style={{
      textDecoration: 'none',
      color: 'white',
      padding: '5px 20px',
      background: '#2D9B9B',
      borderRadius: 8,
    }}
    to={`/livechat/${id}`}
  >
    Connect
  </Link>
);

export default ConnectBtn;
