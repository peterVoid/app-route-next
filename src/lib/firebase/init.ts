// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyd9TnV0C3eY3vaXlPMNG6Y9O55KStNMo",
  authDomain: "next-app-b88bd.firebaseapp.com",
  projectId: "next-app-b88bd",
  storageBucket: "next-app-b88bd.appspot.com",
  messagingSenderId: "730344969607",
  appId: "1:730344969607:web:1ca6296d60b54449a9ef22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
