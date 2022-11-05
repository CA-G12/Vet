import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import IUser from '../Interfaces/post/IUser';
import { db } from './Firebase.config';

async function sendNotifications(
  roomId: string,
  user: IUser,
  chatRoomId: string,
) {
  await addDoc(collection(db, 'Notifications', roomId, 'notification'), {
    uid: user?.id,
    avatar: user?.avatar,
    displayName: user?.name || user?.username,
    timestamp: serverTimestamp(),
    chatRoomId,
  });
}

export { sendNotifications };
