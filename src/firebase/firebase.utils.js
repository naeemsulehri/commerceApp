 import firebase from'firebase/app';
// import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
        apiKey: 'AIzaSyDqNG9GLyQwruE2866FA25E6fSAbQviH18',
        authDomain: 'clothingcrowndb.firebaseapp.com',
        databaseURL: 'https://clothingcrowndb.firebaseio.com',
        projectId: 'clothingcrowndb',
        storageBucket: 'clothingcrowndb.appspot.com',
        messagingSenderId: '557799327537',
        appId: '1:557799327537:web:abd0cac2db12fbf951d210',
        measurementId: 'G-9FC1HFC3M3'
      };

      export const createUserProfileDocument = async ( userAuth , additionalData ) => {
        if( !userAuth ) return;
        const userRef= firestore.doc(`users/${userAuth.uid}`);
        
        const snapShot = await userRef.get();
        if(!snapShot.exists){
          const { displayName, email} = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({displayName , email, createdAt, ...additionalData
            });}
            catch (error){
              console.log('error creating user', error.message);              
            }
        }
        return userRef;
      }
      
firebase.initializeApp( config); 
export const auth = firebase.auth( );
export const firestore = firebase.firestore( );

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);
export default firebase; 