import { getStorage, ref, deleteObject } from 'firebase/storage';

function deleteImgFromFirEBase(file :any) {
  const storage = getStorage();

  const desertRef = ref(storage, `/files/${file.name}`);

  deleteObject(desertRef);
}
export default deleteImgFromFirEBase;
