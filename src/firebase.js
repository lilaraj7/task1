// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE9o2Z-Yxv5-idoeG8o0FHpEfufRUxC3I",
  authDomain: "task-2d79b.firebaseapp.com",
  projectId: "task-2d79b",
  storageBucket: "task-2d79b.appspot.com",
  messagingSenderId: "881373101120",
  appId: "1:881373101120:web:10e815abb7441e2c9173a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()