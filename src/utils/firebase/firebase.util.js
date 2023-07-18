// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  signInWithRedirect,
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAADwvV2e8TweCfETj_dI5i3hSd2bMN8mc",
  authDomain: "e-cloth-db-8e04b.firebaseapp.com",
  projectId: "e-cloth-db-8e04b",
  storageBucket: "e-cloth-db-8e04b.appspot.com",
  messagingSenderId: "780981965409",
  appId: "1:780981965409:web:46bb04363987b9b59b9020",
  measurementId: "G-WYX0ZGGPCX",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// no need for analytics right now
// const analytics = getAnalytics(app);
