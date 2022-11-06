import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './Firebase.config';

// eslint-disable-next-line promise/prefer-await-to-callbacks
function getNotifications(roomId: string, callback: Function) {
  return onSnapshot(
    query(
      collection(db, 'Notifications', roomId, 'notification'),
      orderBy('timestamp', 'asc'),
    ),
    querySnapshot => {
      const notifications = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      // eslint-disable-next-line promise/prefer-await-to-callbacks
      callback(notifications);
    },
  );
}

export { getNotifications };
