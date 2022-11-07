import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './Firebase.config';

// eslint-disable-next-line promise/prefer-await-to-callbacks
function getWhoActive(callback: Function) {
  return onSnapshot(
    query(collection(db, 'whoActive'), orderBy('timestamp', 'asc')),
    querySnapshot => {
      const actives = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      // eslint-disable-next-line promise/prefer-await-to-callbacks
      callback(actives);
    },
  );
}

export { getWhoActive };
