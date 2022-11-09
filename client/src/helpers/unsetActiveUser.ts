import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './Firebase.config';

async function unsetActiveUser(userId: number | undefined) {
  const washingtonRef = doc(db, 'whoActive', `${userId}`);
  await deleteDoc(washingtonRef);
}

export { unsetActiveUser };
