// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
