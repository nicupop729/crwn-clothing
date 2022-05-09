/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore, doc, getDoc, setDoc,
} from 'firebase/firestore';

// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCtHUK1dHzLCGqSupX2bc9raDe_PUa0NXA',
  authDomain: 'crwn-clothing-db-86d18.firebaseapp.com',
  projectId: 'crwn-clothing-db-86d18',
  storageBucket: 'crwn-clothing-db-86d18.appspot.com',
  messagingSenderId: '188796478952',
  appId: '1:188796478952:web:e3b23a6d7275060f36305d',
  measurementId: 'G-41X3WY7NDP',
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, aditionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// const analytics = getAnalytics(firebaseApp);
