// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNcSwi9dtY61Vn2B31nfPk5gboRqo5U9E",
  authDomain: "chef-recipe-hunter-d3ad9.firebaseapp.com",
  projectId: "chef-recipe-hunter-d3ad9",
  storageBucket: "chef-recipe-hunter-d3ad9.appspot.com",
  messagingSenderId: "141898979287",
  appId: "1:141898979287:web:312aa28129f6d985169d92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;