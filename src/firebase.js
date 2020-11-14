import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAjXKWodX80pR4dcDK9poR7NfA3eZ_IIHw',
    authDomain: 'findme-949ec.firebaseapp.com',
    databaseURL: 'https://findme-949ec.firebaseio.com',
    projectId: 'findme-949ec',
    storageBucket: 'findme-949ec.appspot.com',
    messagingSenderId: '1062540330476',
    appId: '1:1062540330476:web:f60848f89383f901b72cc9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

export default firebase;