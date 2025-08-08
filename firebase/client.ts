// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnxXUu7VFIZ1d5F9VpKvOEHrtJnyDiHsA",
  authDomain: "hireon-1f5e1.firebaseapp.com",
  projectId: "hireon-1f5e1",
  storageBucket: "hireon-1f5e1.firebasestorage.app",
  messagingSenderId: "281709400788",
  appId: "1:281709400788:web:d5c758a1f4b3f427f46141",
  measurementId: "G-CKH3G02CLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
