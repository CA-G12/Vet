import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../helpers/Firebase.config';

const handleUpload = ({
  postData, setPostData, file, setPercent,
}:any) => {
  const storageRef = ref(storage, `/files/${file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      setPercent(Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
      ));

      // update progress
    },
    (err) => console.log(err),
    () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        setPostData({ ...postData, image: url });
        console.log(postData);
      });
    },
  );
};
export default handleUpload;
