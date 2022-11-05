import { doc, updateDoc } from 'firebase/firestore';
import { db } from './Firebase.config';

async function updateMessage() {
  const washingtonRef = doc(
    db,
    'chat-rooms',
    '15-18',
    'messages',
    '0H4xzDH52jcgrUTlga2r',
  );
  await updateDoc(washingtonRef, {
    text: 'true',
  });
}

export { updateMessage };
