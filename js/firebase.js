// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1FJVC0NP_P9STZ9fRRZoBUUszm7PG9Iw",
  authDomain: "web-development-journey-blog.firebaseapp.com",
  projectId: "web-development-journey-blog",
  storageBucket: "web-development-journey-blog.appspot.com",
  messagingSenderId: "1089545998856",
  appId: "1:1089545998856:web:934ad3bab34983eed5f7bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();
