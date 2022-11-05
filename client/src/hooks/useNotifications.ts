import React from 'react';
import { getNotifications } from '../helpers/getNotifications';

function useNotifications(roomId: string, params: string | undefined) {
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = getNotifications(roomId, setNotifications, params);
    return unsubscribe;
  }, [roomId, params]);

  return notifications;
}

export { useNotifications };
