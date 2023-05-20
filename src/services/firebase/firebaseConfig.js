import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoMlhxLfeGnVXs8VUAEL2vsOBB9IsKSzc",
  authDomain: "reactjs-pf-sdrigottirodrigo.firebaseapp.com",
  projectId: "reactjs-pf-sdrigottirodrigo",
  storageBucket: "reactjs-pf-sdrigottirodrigo.appspot.com",
  messagingSenderId: "412628063641",
  appId: "1:412628063641:web:d34e99cf32d6019b89ef08"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



