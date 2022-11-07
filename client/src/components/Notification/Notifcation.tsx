import { NavLink } from 'react-router-dom';
import { deleteNotification } from '../../helpers/DeleteNotification';
import { useAuth } from '../../hooks/UseAuthar';
import INotification from '../../Interfaces/notification/INotification';
import AvatarNotification from './AvatarNotification';

const Notifcation = ({ notification }: { notification: INotification }) => {
  const { user } = useAuth();

  return (
    <NavLink
      style={{
        textDecoration: 'none',
      }}
      to={`chatroom/${notification.uid}`}
      onClick={() => {
        deleteNotification(user?.id, notification.id);
      }}
      type="submit"
    >
      <AvatarNotification
        name={notification.displayName}
        image={notification.avatar}
      />
    </NavLink>
  );
};

export default Notifcation;
