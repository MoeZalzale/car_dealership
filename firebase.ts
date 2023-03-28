// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA50BCxe1KJ7fdmFLkirdZJepW8-KsGjRc",
  authDomain: "car-dealership-b8e8c.firebaseapp.com",
  projectId: "car-dealership-b8e8c",
  storageBucket: "car-dealership-b8e8c.appspot.com",
  messagingSenderId: "631977021652",
  appId: "1:631977021652:web:91c90c512038ebbcfb6b41"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const  db = getFirestore()

export {db}