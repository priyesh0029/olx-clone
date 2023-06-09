import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAen4Q1sXtT9hmt1XXQn1HOl8cS2X6ZBXY",
    authDomain: "olx-clone-30676.firebaseapp.com",
    projectId: "olx-clone-30676",
    storageBucket: "olx-clone-30676.appspot.com",
    messagingSenderId: "819381089414",
    appId: "1:819381089414:web:476eff7aca8fb2815d4d07",
    measurementId: "G-FNRCT3KSSD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;