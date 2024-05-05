// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB79RuKWT7lTW4-T0_wh7Ay-qQ9_vODNpM",
  authDomain: "linkedin-project-37d09.firebaseapp.com",
  projectId: "linkedin-project-37d09",
  storageBucket: "linkedin-project-37d09.appspot.com",
  messagingSenderId: "423960687545",
  appId: "1:423960687545:web:a9528f908526a5a611fc68",
  measurementId: "G-RJSJSB3FB8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);