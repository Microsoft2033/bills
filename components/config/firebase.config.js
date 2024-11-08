// Import the functions you need from the SDKs you need
import { initializeApp,getApp,  getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bills-c7ce2.firebaseapp.com",
  projectId: "bills-c7ce2",
  storageBucket: "bills-c7ce2.appspot.com",
  messagingSenderId: "639743193963",
  appId: "1:639743193963:web:1ba5f4b3b8059891dc522e"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}