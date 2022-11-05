import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
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
      const newNotifications: any = [];

      const notifications = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((ele: any) => !ele.chatRoomId.includes(params));

      // eslint-disable-next-line promise/prefer-await-to-callbacks
      callback(notifications);
    },
  );
}

export { getNotifications };

// ;
//       const newNotifications: any = [];
//       notifications.
