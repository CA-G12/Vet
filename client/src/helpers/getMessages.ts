import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './Firebase.config';

// eslint-disable-next-line promise/prefer-await-to-callbacks
function getMessages(roomId: string, callback: Function) {
  return onSnapshot(
    query(
      collection(db, 'chat-rooms', roomId, 'messages'),
      orderBy('timestamp', 'asc'),
    ),
    querySnapshot => {
      const messages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      // eslint-disable-next-line promise/prefer-await-to-callbacks
      callback(messages);
    },
  );
}

export { getMessages };
