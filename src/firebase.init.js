// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv_-_cno5EvzWCIGYSXqZGMGA6EBhr_Fg",
    authDomain: "web-education-990a6.firebaseapp.com",
    projectId: "web-education-990a6",
    storageBucket: "web-education-990a6.appspot.com",
    messagingSenderId: "872139746875",
    appId: "1:872139746875:web:53f67bc7f63c9e64e7761e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;