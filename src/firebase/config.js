import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: PROCESS.env.apiKey,
    authDomain: PROCESS.env.authDomain,
    projectId: PROCESS.env.projectId,
    storageBucket: PROCESS.env.storageBucket,
    messagingSenderId: PROCESS.env.messagingSenderId,
    appId: PROCESS.env.appId,
};

// initialize firebase
initializeApp(firebaseConfig)

// initialize firestore
const db = getFirestore()

// initialize firebase authentication
const auth = getAuth()

export { db, auth }