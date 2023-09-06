// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLiAw6mbfKqztO3jmP_NYb1SE9UyIiLYo",
  authDomain: "food-delivery-92f67.firebaseapp.com",
  projectId: "food-delivery-92f67",
  storageBucket: "food-delivery-92f67.appspot.com",
  messagingSenderId: "254412255562",
  appId: "1:254412255562:web:efe2adfdc4cbc5e4be11b3"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
