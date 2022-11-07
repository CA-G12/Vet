import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './Firebase.config';

async function deleteOffLine(userId: number | undefined) {
  const washingtonRef = doc(db, 'whoActive', `${userId}`);
  await deleteDoc(washingtonRef);
}

export { deleteOffLine };
