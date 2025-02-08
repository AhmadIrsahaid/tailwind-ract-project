// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Correct import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYrdAxP715MGayitOWwM-R5GcXMAQUZLY",
  authDomain: "test-83850.firebaseapp.com",
  projectId: "test-83850",
  storageBucket: "test-83850.appspot.com", // ✅ Fixed the incorrect domain
  messagingSenderId: "297091238370",
  appId: "1:297091238370:web:46dda06e5796433d4851bb",
  measurementId: "G-9NWT62G5TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Correctly exporting auth
