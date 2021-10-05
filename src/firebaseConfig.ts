import { initializeApp } from "firebase/app";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4JHZOazO2D21KbctqYBuRzGvUMGvBW08",
  authDomain: "aug2021lab1.firebaseapp.com",
  projectId: "aug2021lab1",
  storageBucket: "aug2021lab1.appspot.com",
  messagingSenderId: "499734192536",
  appId: "1:499734192536:web:e9ca02240529303a9c8bed",
  measurementId: "G-79YW0YJMKF",
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const authProvider = new GoogleAuthProvider();

export const signInWithGoogle = (): void => {
  signInWithPopup(auth, authProvider);
};

export function signOut(): void {
  auth.signOut();
}
