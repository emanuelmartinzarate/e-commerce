// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrUSdZhSW9ZOjYfyCTOXD4H3feLoZGz-E",
  authDomain: "ecommerce-22bb2.firebaseapp.com",
  projectId: "ecommerce-22bb2",
  storageBucket: "ecommerce-22bb2.appspot.com",
  messagingSenderId: "477213214829",
  appId: "1:477213214829:web:eb01258b752b8484e89764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp =()=>{
    return app;
}