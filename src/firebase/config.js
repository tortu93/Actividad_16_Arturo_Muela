// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOew8fSsU7ZH02plqkFviEHtItLbDk-m4",
  authDomain: "actividad-15-2eb0c.firebaseapp.com",
  databaseURL: "https://actividad-15-2eb0c-default-rtdb.firebaseio.com",
  projectId: "actividad-15-2eb0c",
  storageBucket: "actividad-15-2eb0c.appspot.com",
  messagingSenderId: "940336790618",
  appId: "1:940336790618:web:2870f8293bc881b3bdec63"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default getDatabase(db);