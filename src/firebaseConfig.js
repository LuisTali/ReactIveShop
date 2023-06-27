import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVmyMzpoWyWur95Y5a7vqqJrrJISBhkOY",
  authDomain: "reactiveshop86.firebaseapp.com",
  projectId: "reactiveshop86",
  storageBucket: "reactiveshop86.appspot.com",
  messagingSenderId: "648815661542",
  appId: "1:648815661542:web:28c071936a7e1fe6400627"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)