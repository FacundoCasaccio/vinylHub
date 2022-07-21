// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzmMO7rq7BctLTNzLSjHnQOr19trzWBZM",
  authDomain: "vinylhub-f03c5.firebaseapp.com",
  projectId: "vinylhub-f03c5",
  storageBucket: "vinylhub-f03c5.appspot.com",
  messagingSenderId: "224063705265",
  appId: "1:224063705265:web:bd1b492bd7429c28ccd290"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);