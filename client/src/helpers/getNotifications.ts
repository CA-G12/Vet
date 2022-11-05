import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import INotification from '../Interfaces/notification/INotification';
import { db } from './Firebase.config';

// eslint-disable-next-line promise/prefer-await-to-callbacks
function getNotifications(
  roomId: string,
  callback: Function,
  params: string | undefined,
) {
  return onSnapshot(
    query(
      collection(db, 'Notifications', roomId, 'notification'),
      orderBy('timestamp', 'asc'),
    ),
    querySnapshot => {
      const notifications = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((ele: any) => !ele.chatRoomId.includes(params));
      console.log('notifications');

      // eslint-disable-next-line promise/prefer-await-to-callbacks
      callback(notifications);
    },
  );
}

export { getNotifications };
