import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB0Az0EWu09etJUvLMawKs6RTf8GZ68iFM",
  authDomain: "evernote-82df7.firebaseapp.com",
  databaseURL: "https://evernote-82df7.firebaseio.com",
  projectId: "evernote-82df7",
  storageBucket: "evernote-82df7.appspot.com",
  messagingSenderId: "908062832242",
  appId: "1:908062832242:web:57c1984f5ae711013674eb"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
