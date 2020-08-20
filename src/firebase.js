import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMJdanfALRpcPKAAq_H3c6VZbXrpea770",
  authDomain: "tiktok-clone-a8c24.firebaseapp.com",
  databaseURL: "https://tiktok-clone-a8c24.firebaseio.com",
  projectId: "tiktok-clone-a8c24",
  storageBucket: "tiktok-clone-a8c24.appspot.com",
  messagingSenderId: "499042387180",
  appId: "1:499042387180:web:960244a92c0eb6b0c151c9",
  measurementId: "G-0F98BDN0B0",
});

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { storage, db };
