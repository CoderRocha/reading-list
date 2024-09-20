import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKLBOOt6CvycLnTP6QaN4CGDAl29JLUGE",
    authDomain: "reading-list-web-app.firebaseapp.com",
    projectId: "reading-list-web-app",
    storageBucket: "reading-list-web-app.appspot.com",
    messagingSenderId: "518776255900",
    appId: "1:518776255900:web:304d08fd41722eba3b8459"
};

// initialize firebase
initializeApp(firebaseConfig)

// initialize firestore
const db = getFirestore()

// initialize firebase authentication
const auth = getAuth()

export { db, auth }