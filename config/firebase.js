// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu5-OUyuB8O2AQeHYfqA5GQ5fABS5XXcM",
  authDomain: "projet-musee-5a5ec.firebaseapp.com",
  projectId: "projet-musee-5a5ec",
  storageBucket: "projet-musee-5a5ec.appspot.com",
  messagingSenderId: "650770339038",
  appId: "1:650770339038:web:292b9182226aaf33861e4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);