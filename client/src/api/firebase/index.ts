import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DEMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImage = async (file: File) => {
  if (!file) return;

  const storageRef = ref(storage, `/files/${file.name}`);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  const imageUrl = await getDownloadURL(uploadTask.ref);

  return imageUrl;
};
