// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDclPztSYxViVIOOE1U5DAiJYopW11LAp4",
  authDomain: "silken-bastion-423908-d4.firebaseapp.com",
  projectId: "silken-bastion-423908-d4",
  storageBucket: "silken-bastion-423908-d4.appspot.com",
  messagingSenderId: "1074175284497",
  appId: "1:1074175284497:web:d14f0cb1e409610b91a8b0",
  measurementId: "G-3DNFBHQWLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
