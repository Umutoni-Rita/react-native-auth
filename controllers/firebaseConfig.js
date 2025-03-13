// // firebase.js
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/auth';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwY4RMjY5TLjK4Lx6f1P7jnZBkIpEyfAY",
  authDomain: "todo-app-auth-32e9b.firebaseapp.com",
  projectId: "todo-app-auth-32e9b",
  storageBucket: "todo-app-auth-32e9b.firebasestorage.app",
  messagingSenderId: "68185674560",
  appId: "1:68185674560:web:fefd4ae7dba4d4636260a5",
  databaseURL: "https://todo-app-auth-32e9b-default-rtdb.firebaseio.com",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase only if it hasn’t been initialized yet

const auth = getAuth(app);

export { auth };

