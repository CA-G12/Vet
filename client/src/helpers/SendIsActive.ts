import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import IUser from '../Interfaces/post/IUser';
import { db } from './Firebase.config';

async function SendIsActive(user: IUser, state: boolean) {
  await setDoc(
    doc(db, 'whoActive', `${user.id}`),
    {
      state,
      name: user.name,
      avatar: user.avatar,
      workplace: user?.Doctor?.workplace || 'naser',
      timestamp: serverTimestamp(),
    },
    { merge: true },
  );
}

export { SendIsActive };
