// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAoxRzYtIvuE8svm-BzawubHp6LJPqg0I8",
    authDomain: "mailtoself-8da87.firebaseapp.com",
    projectId: "mailtoself-8da87",
    storageBucket: "mailtoself-8da87.appspot.com",
    messagingSenderId: "368489179639",
    appId: "1:368489179639:web:65158830feed2321c766f2"
  };


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, createUserWithEmailAndPassword };




