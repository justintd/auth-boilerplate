import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'auth-boilerplate-55fa5.firebaseapp.com',
  databaseURL: 'https://auth-boilerplate-55fa5.firebaseio.com',
  projectId: 'auth-boilerplate-55fa5',
  storageBucket: 'auth-boilerplate-55fa5.appspot.com',
  messagingSenderId: '294425927487',
  appId: '1:294425927487:web:b0fec2fa7cbcb21fc9bd8a',
  measurementId: 'G-FX4Q80B20B',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
