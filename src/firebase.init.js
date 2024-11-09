import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyQC8PXbUKFI5usPjn1isX5uL5dlgXcY8",
  authDomain: "fir-login-form-e15e8.firebaseapp.com",
  projectId: "fir-login-form-e15e8",
  storageBucket: "fir-login-form-e15e8.firebasestorage.app",
  messagingSenderId: "628922269847",
  appId: "1:628922269847:web:307b3a99a02a907620a9d2",
  measurementId: "G-D0M573RE90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);