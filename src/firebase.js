import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpJIqcsvi2jMGpUnx0zmN7iih-Asa5l2I",
  authDomain: "brogrammers-tsec.firebaseapp.com",
  projectId: "brogrammers-tsec",
  storageBucket: "brogrammers-tsec.appspot.com",
  messagingSenderId: "1029798896450",
  appId: "1:1029798896450:web:f4272422bb62dfc0631edb",
};

const iniApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = iniApp.firestore();

export { db };
