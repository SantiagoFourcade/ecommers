
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAPYc8-KVK3P5KMEG2MLB2LeiQ3sEzhU1E",
  authDomain: "ecommerce1-acb13.firebaseapp.com",
  projectId: "ecommerce1-acb13",
  storageBucket: "ecommerce1-acb13.appspot.com",
  messagingSenderId: "683164979100",
  appId: "1:683164979100:web:f842248c372d5acee48259"
};


const app = initializeApp(firebaseConfig);



export const auth = getAuth(app)
export const dataBase = getFirestore(app)
