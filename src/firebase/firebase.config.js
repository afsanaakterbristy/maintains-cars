// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArpKvm97nKkETufOTd1qEOz8GaWWE64cc",
  authDomain: "maintains-car.firebaseapp.com",
  projectId: "maintains-car",
  storageBucket: "maintains-car.appspot.com",
  messagingSenderId: "744611373395",
  appId: "1:744611373395:web:f0daf2add1ddbf3e7541a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;