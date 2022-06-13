import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyCUott7tQJpWuWiYGUXoHBQizAGcJvnJVY",
    authDomain: "js12-73da2.firebaseapp.com",
    projectId: "js12-73da2",
    storageBucket: "js12-73da2.appspot.com",
    messagingSenderId: "229300106010",
    appId: "1:229300106010:web:01b2fdaba18be2d40df2a3"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;
