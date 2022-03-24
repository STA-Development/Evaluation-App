// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA1ERAEfRI5MujwltzKGmULTCZx5IPNCvc",
//   authDomain: "evaluation-513c5.firebaseapp.com",
//   projectId: "evaluation-513c5",
//   storageBucket: "evaluation-513c5.appspot.com",
//   messagingSenderId: "948069959400",
//   appId: "1:948069959400:web:d8884376352ea97e17eb5d"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// import {initializeApp} from "firebase/app';
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
import  {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1ERAEfRI5MujwltzKGmULTCZx5IPNCvc",
  authDomain: "evaluation-513c5.firebaseapp.com",
  projectId: "evaluation-513c5",
  storageBucket: "evaluation-513c5.appspot.com",
  messagingSenderId: "948069959400",
  appId: "1:948069959400:web:d8884376352ea97e17eb5d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default db;
