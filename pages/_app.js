import {useAuthState} from 'react-firebase-hooks/auth';
import '../styles/globals.css'
import {auth,db} from '../firebase';
import LogIn from './login';
import firebase from 'firebase';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth);

  useEffect(() => {
    if(user){
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      },
      {merge: true}
      );
    }
  },[user])

  if(!user) return <LogIn/>

  return <Component {...pageProps} />
}

export default MyApp
