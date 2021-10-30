import { useEffect, useState } from "react"
import {onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";

import firebaseInitialized from "../Firebase/firebase.initialized";

firebaseInitialized()

const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLogged,setIsLogged]=useState(false)
   
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();


 // google login

const handleGoogleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider)
     
   };   

// log Out 
const logOut = ()=>{
    signOut(auth).then(() => {
        setUser({})
        setIsLogged(false)
      }).catch((error) => {
        
      });
}


// onAuthStateChanged
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  
  
  
    

    return {
        user,
        handleGoogleSignIn,
        logOut,
        isLogged,
        setIsLogged,
    };
};

export default useFirebase;