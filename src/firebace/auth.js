
import { auth } from "./firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email, password) => {  
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}


export const doSignInwithGoogle = async () => { 
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;

}


export const doSignOut = async () => {
  return auth.signOut();
}