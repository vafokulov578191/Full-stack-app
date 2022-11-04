// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApK3SqlPV3IxXIt9R93An7RnnYhadG2mM",
  authDomain: "store-597d3.firebaseapp.com",
  projectId: "store-597d3",
  storageBucket: "store-597d3.appspot.com",
  messagingSenderId: "910963620884",
  appId: "1:910963620884:web:efd1f2ae630748f8eb3b01",
  measurementId: "G-3XTFYCF1N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);