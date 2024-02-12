// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-KgdzNi38NxmDDxceMW5-_zuI_RRpUs4",
  authDomain: "assignment-f3eb5.firebaseapp.com",
  projectId: "assignment-f3eb5",
  storageBucket: "assignment-f3eb5.appspot.com",
  messagingSenderId: "1023468021813",
  appId: "1:1023468021813:web:5d86d1470bad438481a97c",
  // measurementId: "G-5HVMXZWWSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);