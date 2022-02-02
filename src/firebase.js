import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBicu-z-5X4QbYGoaJbVOeKjF-H55K4op4",
  
    authDomain: "sweetmemories-dev.firebaseapp.com",
  
    projectId: "sweetmemories-dev",
  
    storageBucket: "sweetmemories-dev.appspot.com",
  
    messagingSenderId: "985202766269",
  
    appId: "1:985202766269:web:e57c20b6a286e62b59e2d4"
  
  };

// const app = firebase.initializeApp({
//     apiKey: process.env.RREACT_FIREBASE_API_KEY,

//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

//     appId: process.env.REACT_APP_FIREBASE_APP_ID

// });

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export default app