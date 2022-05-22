// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkqqCpTlYqpQ72wqyRIOGX-d-Tj23-RLQ",
  authDomain: "cyele-parts.firebaseapp.com",
  projectId: "cyele-parts",
  storageBucket: "cyele-parts.appspot.com",
  messagingSenderId: "946184399489",
  appId: "1:946184399489:web:44d9d11db42b36aed1fb80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;