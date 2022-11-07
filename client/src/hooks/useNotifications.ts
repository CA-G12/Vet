import React from 'react';
import { getNotifications } from '../helpers/getNotifications';

function useNotifications(roomId: string) {
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getNotifications(roomId, setNotifications);
    return unsubscribe;
  }, [roomId]);

  return notifications;
}

export { useNotifications };
