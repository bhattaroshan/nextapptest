import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqpMDMvatzJ6vr24DShWBmzNFCCoiSthA",
    authDomain: "nextapp-c1cc3.firebaseapp.com",
    projectId: "nextapp-c1cc3",
    storageBucket: "nextapp-c1cc3.appspot.com",
    messagingSenderId: "908837654634",
    appId: "1:908837654634:web:1fd8a8ce74351bdf783a13"
};

const app = !firebase.apps.length
          ?firebase.initializeApp(firebaseConfig)
          :firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};