import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deleteNotification } from '../../helpers/DeleteNotification';
import { useAuth } from '../../hooks/UseAuthar';
import INotification from '../../Interfaces/notification/INotification';

const Notifcation = ({ notification }: { notification: INotification }) => {
  const { user } = useAuth();
  const params = useParams();
  useEffect(() => {
    if (params.id === `${notification.uid}`) {
      deleteNotification(user?.id, notification.id);
    }
  }, [params, user?.id, notification]);
  return (
    <Box>
      <button
        onClick={() => {
          deleteNotification(user?.id, notification.id);
        }}
        type="submit"
      >
        {notification.id}
      </button>
    </Box>
  );
};

export default Notifcation;
