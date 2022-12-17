// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3q01fWotFKpzqGRohE7RfirHSecSXJ3s",
  authDomain: "blogging-site-4f398.firebaseapp.com",
  projectId: "blogging-site-4f398",
  storageBucket: "blogging-site-4f398.appspot.com",
  messagingSenderId: "762682683188",
  appId: "1:762682683188:web:e0b31753333bea7bbd3f61",
  measurementId: "G-0SCH59DLFP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
