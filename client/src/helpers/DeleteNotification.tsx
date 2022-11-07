import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './Firebase.config';

async function deleteNotification(userId: number | undefined, id: string) {
  const washingtonRef = doc(
    db,
    'Notifications',
    `${userId}`,
    'notification',
    id,
  );
  await deleteDoc(washingtonRef);
}

export { deleteNotification };
