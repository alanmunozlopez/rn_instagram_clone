import * as firebase from 'firebase';

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyCrvUSJnVQ4lrjbe-WIrEUroDDVmx2ippo',
  authDomain: 'clone-instagram-a915e.firebaseapp.com',
  databaseURL: 'https://clone-instagram-a915e.firebaseio.com',
  projectId: 'clone-instagram-a915e',
  storageBucket: 'clone-instagram-a915e.appspot.com',
  messagingSenderId: '63432567726',
};
firebase.initializeApp(config);

export const authentication = firebase.auth();
export const database = firebase.database();
