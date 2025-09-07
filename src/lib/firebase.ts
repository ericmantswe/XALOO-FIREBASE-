// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARTaRmHJHnolaldy1X5BD2Lihh4v29U5M",
  authDomain: "xaloo-technologies.firebaseapp.com",
  projectId: "xaloo-technologies",
  storageBucket: "xaloo-technologies.appspot.com",
  messagingSenderId: "995961329081",
  appId: "1:995961329081:web:200e30490addab0aea9268"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export { app };
