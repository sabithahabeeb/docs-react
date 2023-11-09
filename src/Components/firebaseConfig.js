import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF5IsDGfhZCUknEk14lG3KZk2wMXfMGgk",
    authDomain: "docs-c9516.firebaseapp.com",
    projectId: "docs-c9516",
    storageBucket: "docs-c9516.appspot.com",
    messagingSenderId: "864252793624",
    appId: "1:864252793624:web:21db10238953139ab3046d",
    measurementId: "G-HM86RZFL35"
  };

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
