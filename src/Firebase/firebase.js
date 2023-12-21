// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7XZXQCAQpfXzZJU3c8KagbLJBlZ90vAs",
  authDomain: "solvedit-9fee9.firebaseapp.com",
  projectId: "solvedit-9fee9",
  storageBucket: "solvedit-9fee9.appspot.com",
  messagingSenderId: "1013307628953",
  appId: "1:1013307628953:web:e2f75e99d7c1a764e50708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
