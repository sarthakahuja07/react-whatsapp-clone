import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDeBq0kPyjeP2TWgDns4zOY7bOZJUqWNBo",
    authDomain: "whatsapp-b3ecc.firebaseapp.com",
    projectId: "whatsapp-b3ecc",
    storageBucket: "whatsapp-b3ecc.appspot.com",
    messagingSenderId: "631261586939",
    appId: "1:631261586939:web:d7b90a9fd49cde16add75e",
    measurementId: "G-R8P1SJLWYH"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  var auth=firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider}
  export  default db;