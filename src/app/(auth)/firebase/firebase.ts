import { initializeApp, getApps } from "firebase/app";
import { getAuth,  signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhiEfXhAAvvJPe3qjcVHaYkaaOGM5ouoI",
    authDomain: "friendly-eats-20440.firebaseapp.com",
    projectId: "friendly-eats-20440",
    storageBucket: "friendly-eats-20440.appspot.com",
    messagingSenderId: "212211055840",
    appId: "1:212211055840:web:f43ab70073b6b8e57e6485"
  };

const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(firebase_app);

export { auth, signInWithPhoneNumber, RecaptchaVerifier, firebase_app };
