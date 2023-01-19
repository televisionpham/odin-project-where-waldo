// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPF17ngjHn8hXDhHqEbCSIjbJWPlYsQdM",
  authDomain: "odin-project-where-waldo.firebaseapp.com",
  projectId: "odin-project-where-waldo",
  storageBucket: "odin-project-where-waldo.appspot.com",
  messagingSenderId: "793842511232",
  appId: "1:793842511232:web:005ffc1c15f4731f7e6565",
  measurementId: "G-FPMFL5K4SB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
