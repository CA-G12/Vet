import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import IUser from '../Interfaces/post/IUser';
import { db } from './Firebase.config';

async function sendNotifications(
  roomId: string,
  user: IUser,
  chatRoomId: string,
) {
  await setDoc(
    doc(db, 'Notifications', roomId, 'notification', chatRoomId),
    {
      uid: user?.id,
      avatar: user?.avatar,
      displayName: user?.name || user?.username,
      timestamp: serverTimestamp(),
      chatRoomId,
    },
    { merge: true },
  );
}

export { sendNotifications };
