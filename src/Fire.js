import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyI6P5bhBAqEc8IQQLfKITv_kWE9TFRZo",
    authDomain: "appartment-hunt-bcbe9.firebaseapp.com",
    databaseURL: "https://appartment-hunt-bcbe9.firebaseio.com",
    projectId: "appartment-hunt-bcbe9",
    storageBucket: "appartment-hunt-bcbe9.appspot.com",
    messagingSenderId: "46059124022",
    appId: "1:46059124022:web:fe99be062f4dea529fef97",
    measurementId: "G-XB73XEDGQZ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const fbProvider = new firebase.auth.FacebookAuthProvider();


export default fire;