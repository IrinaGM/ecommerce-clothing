import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA_AfsuUAzim8gPRnnI6ANZQ02OGcD5G5A',
  authDomain: 'ecommerce-clothing-bae85.firebaseapp.com',
  databaseURL: 'https://ecommerce-clothing-bae85.firebaseio.com',
  projectId: 'ecommerce-clothing-bae85',
  storageBucket: 'ecommerce-clothing-bae85.appspot.com',
  messagingSenderId: '194053432402',
  appId: '1:194053432402:web:e56fb32b1d051f89ab6b8b',
  measurementId: 'G-CYDF8ST576'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setting up the google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
