import { Link } from 'react-router-dom';
import { EmergencyAvatar, EmergencyPhoneIcon } from '../../components.styled';

export const FireCall = () => {
  return (
    <Link to="/emergency">
      <EmergencyAvatar>
        <EmergencyPhoneIcon />
      </EmergencyAvatar>
    </Link>
  );
};
