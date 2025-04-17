// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf4Exr2amybPqmu_r7BYuGlAkUcnvs-r4",
  authDomain: "todo-application-78f37.firebaseapp.com",
  projectId: "todo-application-78f37",
  storageBucket: "todo-application-78f37.firebasestorage.app",
  messagingSenderId: "101320013328",
  appId: "1:101320013328:web:6805d83044bc566106fc95",
  measurementId: "G-4GN5XE6PBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
