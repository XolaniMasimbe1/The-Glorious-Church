import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAyx7k2F-90s5ezqtgWALaI7eYMzxf_OfI",
  authDomain: "the-glorious-church-3dd9c.firebaseapp.com",
  projectId: "the-glorious-church-3dd9c",
  storageBucket: "the-glorious-church-3dd9c.firebasestorage.app",
  messagingSenderId: "384451210215",
  appId: "1:384451210215:web:140bcd7370396e7aa4eb42",
  measurementId: "G-S89CVJQCTZ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
