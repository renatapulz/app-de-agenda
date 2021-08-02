import firebase from "firebase/app";
import "firebase/firestore";


  var firebaseConfig = {
    apiKey: "AIzaSyDF_9ljGetA14cE2PBwb7oHvq-zgxEwSJE",
    authDomain: "app-agenda-83d09.firebaseapp.com",
    projectId: "app-agenda-83d09",
    storageBucket: "app-agenda-83d09.appspot.com",
    messagingSenderId: "936242487663",
    appId: "1:936242487663:web:cd0a3cace0c5d78ea9c89a",
    measurementId: "G-KJ99H1B96Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const firebaseDB = firebase.firestore();