// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-c1fd2.firebaseapp.com",
  projectId: "mern-real-estate-c1fd2",
  storageBucket: "mern-real-estate-c1fd2.appspot.com",
  messagingSenderId: "394800536778",
  appId: "1:394800536778:web:9f7593694f8ca9f80c2833",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
