import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHRCO0ax7Hx3nzr9I1OJzQ4O2W7yl4hSU",
    authDomain: "proiectfrontend-30eff.firebaseapp.com",
    projectId: "proiectfrontend-30eff",
    storageBucket: "proiectfrontend-30eff.appspot.com",
    messagingSenderId: "920938310904",
    appId: "1:920938310904:web:6066697f94dfb30a459f0d"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app);