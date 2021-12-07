import * as firebase from "firebase/app";
import 'firebase/firestore';


import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQOAaH6KhtViW1YC5JGX4cnQEWd4RylgM",
    authDomain: "testing-a1cde.firebaseapp.com",
    projectId: "testing-a1cde",
    storageBucket: "testing-a1cde.appspot.com",
    messagingSenderId: "232761208627",
    appId: "1:232761208627:web:97d6fa045568d48fc89846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);