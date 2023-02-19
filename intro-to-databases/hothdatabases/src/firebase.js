// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtSb5piAAra3ekvfwxhEqlHInh8vV48Zs",
  authDomain: "hoth-x-data.firebaseapp.com",
  projectId: "hoth-x-data",
  storageBucket: "hoth-x-data.appspot.com",
  messagingSenderId: "3586471422",
  appId: "1:3586471422:web:a2cd79a4614dd39970bcaf",
  measurementId: "G-V7CYBP5WE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export default db;
