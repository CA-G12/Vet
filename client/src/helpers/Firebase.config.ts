import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const app = initializeApp({

  apiKey: 'AIzaSyAEkjJRLUDfoFUwDcSrZJTL-RP4ATurBmI',

  authDomain: 'vets-10634.firebaseapp.com',

  projectId: 'vets-10634',

  storageBucket: 'vets-10634.appspot.com',

  messagingSenderId: '460456136363',

  appId: '1:460456136363:web:8063cf0f133522a46b71ee',

  measurementId: 'G-ED5N1LCEJT',

});

// Initialize Firebase
export const storage = getStorage(app);
export default storage;
