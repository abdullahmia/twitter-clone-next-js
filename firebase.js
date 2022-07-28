import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCjb_q5hRONZiGhSuYTP0nNnxnOyxkvq_A",
  authDomain: "twitter-clone-be7d1.firebaseapp.com",
  databaseURL: "https://twitter-clone-be7d1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "twitter-clone-be7d1",
  storageBucket: "twitter-clone-be7d1.appspot.com",
  messagingSenderId: "154813664303",
  appId: "1:154813664303:web:aee583a88bb622fe8a4ada"
};

// initilize the firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

