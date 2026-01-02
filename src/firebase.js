import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4UuVRa0di0u-7nvj3xbobykHBb-xItCE",
  authDomain: "aromi-fashion-industry-69d9d.firebaseapp.com",
  projectId: "aromi-fashion-industry-69d9d",
  storageBucket: "aromi-fashion-industry-69d9d.firebasestorage.app",
  messagingSenderId: "496676163283",
  appId: "1:496676163283:web:888faadb6d055a8df4ce26"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
