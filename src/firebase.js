// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "blog-management-system-718dc.firebaseapp.com",
  projectId: "blog-management-system-718dc",
  storageBucket: "blog-management-system-718dc.appspot.com",
  messagingSenderId: "929325236702",
  appId: "1:929325236702:web:4d6bb4a245c17a909a9d4f",
  measurementId: "G-GK7E66FPCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
