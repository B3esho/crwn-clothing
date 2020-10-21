import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDy0X32zBBbQOvPYI-KOmEqHayCDU3Uvus",
    authDomain: "crwn-db-51136.firebaseapp.com",
    databaseURL: "https://crwn-db-51136.firebaseio.com",
    projectId: "crwn-db-51136",
    storageBucket: "crwn-db-51136.appspot.com",
    messagingSenderId: "138857522370",
    appId: "1:138857522370:web:f5a8927e17a12f8646475b",
    measurementId: "G-R5KEMJW0C0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;