import { getStorage, ref, deleteObject } from 'firebase/storage';

function deleteImageFromStorage(file: any) {
  const storage = getStorage();

  const desertRef = ref(storage, `/files/${file.name}`);

  return deleteObject(desertRef);
}

export default deleteImageFromStorage;
