// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsP_ILTiWTCZkhSmkFHJ9jZFI19Acy97U",
  authDomain: "link-tree-clone-e77d0.firebaseapp.com",
  projectId: "link-tree-clone-e77d0",
  storageBucket: "link-tree-clone-e77d0.appspot.com",
  messagingSenderId: "419948700673",
  appId: "1:419948700673:web:b1930df333eef3d4994c00",
  measurementId: "G-LT90Y8WG1X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app); 
export const storage = getStorage(app);