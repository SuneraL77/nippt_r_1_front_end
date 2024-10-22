// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const  firebaseConfig = {
  apiKey: "AIzaSyChSeBjMxrpHyuvEembwyei9tJcW1TxOj8",
  authDomain: "matara-67da1.firebaseapp.com",
  projectId: "matara-67da1",
  storageBucket: "matara-67da1.appspot.com",
  messagingSenderId: "982856468724",
  appId: "1:982856468724:web:76a1804d84772e6b0df6a1",
  measurementId: "G-YZVZPYQ2M6"
}
/**
 * 
 * 
 */

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 