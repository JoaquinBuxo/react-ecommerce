// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTVwmr9unln7hVLGoJc4HwJgkwpHNt8Q",
  authDomain: "react-ecommerce-adventure.firebaseapp.com",
  projectId: "react-ecommerce-adventure",
  storageBucket: "react-ecommerce-adventure.appspot.com",
  messagingSenderId: "486761501139",
  appId: "1:486761501139:web:b7802344979a5b57bedf26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
