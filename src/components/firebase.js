import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_34J7kCp6HBgN3fSNNOfJLAeWgKKE3uM",
  authDomain: "linkedin-tutorial.firebaseapp.com",
  projectId: "linkedin-tutorial",
  storageBucket: "linkedin-tutorial.appspot.com",
  messagingSenderId: "924133113611",
  appId: "1:924133113611:web:e58b1ec012502fbe1e2c0e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
