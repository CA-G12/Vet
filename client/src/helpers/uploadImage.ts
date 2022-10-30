import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from './Firebase.config';

const uploadImage = (file: File, onProgressChange: (num: number) => void) => {
  const storageRef = ref(
    storage,
    `/files/${uuidv4()}.${file.name.split('.').pop()}`,
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise<string>((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgressChange(progress);
      },
      err => reject(err),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(url);
      },
    );
  });
};

export default uploadImage;
