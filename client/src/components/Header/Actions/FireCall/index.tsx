import { NavLink } from 'react-router-dom';
import { EmergencyAvatar, EmergencyPhoneIcon } from '../../components.styled';

export const FireCall = () => {
  return (
    <NavLink to="/emergency">
      <EmergencyAvatar>
        <EmergencyPhoneIcon />
      </EmergencyAvatar>
    </NavLink>
  );
};
