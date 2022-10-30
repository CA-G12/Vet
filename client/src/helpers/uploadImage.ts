import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from './Firebase.config';

const uploadImage = (file: File, callback: Function) => {
  const storageRef = ref(storage, `/files/${uuidv4()}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise<string>((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        callback(progress);
      },
      (err) => reject(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => resolve(url));
      },
    );
  });
};

export default uploadImage;
