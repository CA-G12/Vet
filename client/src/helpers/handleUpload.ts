import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

interface IAddComment{
  image:string
  comment:string
  UserId:number
}
const handleUpload = ({
  addComment, setAddComment, file, setPercent, setIsUpLoadImg,
}:{addComment:IAddComment, setAddComment:Function, file:any,
   setPercent:Function, setIsUpLoadImg:Function }) => {
  setIsUpLoadImg(true);
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

        setIsUpLoadImg(true);
        return url;
      })
        .then((url) => {
          setAddComment({ ...addComment, image: url });
          setIsUpLoadImg(false);
        });
    },
  );
};
export default handleUpload;
