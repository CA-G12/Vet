import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import IUser from '../Interfaces/post/IUser';
import { db } from './Firebase.config';

async function sendMessage(roomId: string, user: IUser, text: string) {
  await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
    uid: user.id,
    avatar: user.avatar,
    displayName: user.name || user?.username,
    text: text.trim(),
    timestamp: serverTimestamp(),
  });
}

export { sendMessage };
