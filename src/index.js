import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// Public keys below
const firebaseConfig = {
  apiKey: "AIzaSyDjocpvTGbhIwuORbjfwP3JHNuKrJc8Iw8",
  authDomain: "my-react-blog-12f04.firebaseapp.com",
  projectId: "my-react-blog-12f04",
  storageBucket: "my-react-blog-12f04.appspot.com",
  messagingSenderId: "288747583383",
  appId: "1:288747583383:web:75cc81a1ef0ecc263d76d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
