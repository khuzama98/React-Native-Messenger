import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBX7MbfpDcODNxB-39_TPK0wypeg7kXvA8",
    authDomain: "messenger-60338.firebaseapp.com",
    databaseURL: "https://messenger-60338.firebaseio.com",
    projectId: "messenger-60338",
    storageBucket: "",
    messagingSenderId: "373695051394",
    appId: "1:373695051394:web:5718d8de763be497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login(token) {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    return firebase.auth().signInWithCredential(credential);
}

export {
    login
}