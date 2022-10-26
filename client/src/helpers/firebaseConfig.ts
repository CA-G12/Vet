import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const app = initializeApp({

  apiKey: 'AIzaSyAjvlvuCf4Nb4HeEhCQl28UhkLJKzgqDPE',
  authDomain: 'kakashi-bbaa3.firebaseapp.com',
  projectId: 'kakashi-bbaa3',
  storageBucket: 'kakashi-bbaa3.appspot.com',
  messagingSenderId: '450740322752',
  appId: '1:450740322752:web:48adb4fe78b2c8e3224825',

});

// Initialize Firebase
export const storage = getStorage(app);
export default storage;
