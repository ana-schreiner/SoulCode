import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPP38rdIiiZouLyY4b6SD4S3SwORx6crg",
  authDomain: "my-task-3ecff.firebaseapp.com",
  projectId: "my-task-3ecff",
  storageBucket: "my-task-3ecff.appspot.com",
  messagingSenderId: "246242613487",
  appId: "1:246242613487:web:d656114233ad526849e31a"
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de Authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);