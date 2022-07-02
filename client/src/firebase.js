// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxvUOfSIk_EFCxDUD6JA2iOsDsVcoioo0",
  authDomain: "starnote-ac173.firebaseapp.com",
  projectId: "starnote-ac173",
  storageBucket: "starnote-ac173.appspot.com",
  messagingSenderId: "191866613986",
  appId: "1:191866613986:web:f1c6875084de8ef38feebb",
  measurementId: "G-E3DD6BVHKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider