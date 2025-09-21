// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhtJhjtF2qPs5cc5XO21iqzee0R4mq44c",
  authDomain: "astroquery-b6d82.firebaseapp.com",
  projectId: "astroquery-b6d82",
  storageBucket: "astroquery-b6d82.firebasestorage.app",
  messagingSenderId: "906977766103",
  appId: "1:906977766103:web:070a2f83a45f4ff8f6de92",
  measurementId: "G-10D6YW9NGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);