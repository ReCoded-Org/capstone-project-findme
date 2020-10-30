import firebase from 'firebase/app';
import 'firebase/auth';



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAM0vAbJVeXTQ4yEZOWJzm4FS4FKU4DKWg",
    authDomain: "findme-e7561.firebaseapp.com",
    databaseURL: "https://findme-e7561.firebaseio.com",
    projectId: "findme-e7561",
    storageBucket: "findme-e7561.appspot.com",
    messagingSenderId: "998935135137",
    appId: "1:998935135137:web:db850039d72d05250f41e0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;