// auth.js
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error('Sign-up error:', error);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    console.log('User signed out');
  } catch (error) {
    console.error('Sign-out error:', error);
    throw error;
  }
};

const handleLogin = async () => {
  const response = await axios.post("http://localhost:3000/login", { email, password });
  const { token } = response.data;
  await AsyncStorage.setItem("authToken", token);
};

