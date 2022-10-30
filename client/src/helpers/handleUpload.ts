import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from './firebaseConfig';

const handleUpload = (
  data: any,
  callback: Function,
  file: File,
  setIsUpLoadImg: Function,

) => {
  setIsUpLoadImg(true);

  const storageRef = ref(storage, `/files/${uuidv4()}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      console.log(snapshot);
    },
    (err) => console.log(err),
    () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setIsUpLoadImg(true);
        return url;
      })
        .then((url) => {
          callback({ ...data, image: url });
          setIsUpLoadImg(false);
        });
    },
  );
};
export default handleUpload;
