import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWlUjATI_jSe8xL1R79TWQnwHIuFVwoI4",
    authDomain: "fir-81741.firebaseapp.com",
    projectId: "fir-81741",
    storageBucket: "fir-81741.appspot.com",
    messagingSenderId: "894225763019",
    appId: "1:894225763019:web:9c25332e6041eb489fa94e",
    measurementId: "G-2C1DPEGE35"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;