import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdxiW-G2wKU30i29-ygq8gdyE0mSJFXoE",
    authDomain: "form-test-cc5e8.firebaseapp.com",
    databaseURL: "https://form-test-cc5e8.firebaseio.com",
    projectId: "form-test-cc5e8",
    storageBucket: "form-test-cc5e8.appspot.com",
    messagingSenderId: "945511644582",
    appId: "1:945511644582:web:aa3715a018b65cb86ca367",
    measurementId: "G-969NHL88FT"
};

//Initialized the firebase configurations..
firebase.initializeApp(firebaseConfig);

///Firebase database...
const firebaseDB = firebase.database();

///Authentication Login Providers..
const googleAuth = new firebase.auth.GoogleAuthProvider();
const facebookAuth =  new firebase.auth.FacebookAuthProvider();

///Exporting things which need to use..
export {
    firebase,
    firebaseDB,
    googleAuth,
    facebookAuth,
}
