// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase/app';


// const firebaseConfig = {
//   apiKey: "AIzaSyBmcBhmPymbPc10iPhMLzeOVEac4Y480Qw",
//   authDomain: "react-ch9-crud-with-firebase.firebaseapp.com",
//   projectId: "react-ch9-crud-with-firebase",
//   storageBucket: "react-ch9-crud-with-firebase.appspot.com",
//   messagingSenderId: "94685055006",
//   appId: "1:94685055006:web:7f025847411d1e8207860f",
//   measurementId: "G-9S1NDT3XX9",
// };

// firebase.initializeApp(firebaseConfig);
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmcBhmPymbPc10iPhMLzeOVEac4Y480Qw",
  authDomain: "react-ch9-crud-with-firebase.firebaseapp.com",
  projectId: "react-ch9-crud-with-firebase",
  storageBucket: "react-ch9-crud-with-firebase.appspot.com",
  messagingSenderId: "94685055006",
  appId: "1:94685055006:web:7f025847411d1e8207860f",
  measurementId: "G-9S1NDT3XX9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics(app);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();










