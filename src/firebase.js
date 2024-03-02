// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ3pHhC0yr8lcdULJgLBRDyRIvUfxrp50",
  authDomain: "spareroom-414816.firebaseapp.com",
  projectId: "spareroom-414816",
  storageBucket: "spareroom-414816.appspot.com",
  messagingSenderId: "567425578892",
  appId: "1:567425578892:web:e7612d6b4f0eb0529688a9",
  measurementId: "G-EZ5146YSJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);