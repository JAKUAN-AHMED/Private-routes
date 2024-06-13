// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTupmEwlsT-KbV94wqSQRsqJuht831yA4",
  authDomain: "privet-repo.firebaseapp.com",
  projectId: "privet-repo",
  storageBucket: "privet-repo.appspot.com",
  messagingSenderId: "51814718557",
  appId: "1:51814718557:web:715877793ff523238e41b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;