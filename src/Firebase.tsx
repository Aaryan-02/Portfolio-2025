import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8y1ELkqWdfgGFDkZDZC8AfO-MRXWs0y8",
  authDomain: "aaryan-portfolio-a11e8.firebaseapp.com",
  projectId: "aaryan-portfolio-a11e8",
  storageBucket: "aaryan-portfolio-a11e8.firebasestorage.app",
  messagingSenderId: "772131379262",
  appId: "1:772131379262:web:8dc0b71e65fa6be521996f",
  measurementId: "G-513DS7ZKRX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);