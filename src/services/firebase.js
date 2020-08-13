// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCdGmSQ9WZz1TCpjBiBDSaBUbvrNmQ9VMA",
  authDomain: "e-learning-horizon.firebaseapp.com",
  databaseURL: "https://e-learning-horizon.firebaseio.com",
  projectId: "e-learning-horizon",
  storageBucket: "",
  messagingSenderId: "WeThink Learning-145042173878",
  appId: "1:145042173878:web:bec138f4ab968c20795b17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;
