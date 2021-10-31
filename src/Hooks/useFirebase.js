import { useEffect, useState } from "react"
import {onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";

import firebaseInitialized from "../Firebase/firebase.initialized";

firebaseInitialized()

const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLogged,setIsLogged]=useState(false)
    const [isLoading,setIsLoading]=useState(true)
   
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();


 // google login

const handleGoogleSignIn = () => {
  setIsLoading(true)
    return signInWithPopup(auth, GoogleProvider)
     
   };   

// log Out 
const logOut = ()=>{
  setIsLoading(true)
    signOut(auth).then(() => {
      setUser({})
      setIsLogged(false)
      }).catch((error) => {
        
      });
}


// onAuthStateChanged
useEffect(() => {
  setIsLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false)
    });
  }, []);
  
  
  
    

    return {
        user,
        handleGoogleSignIn,
        logOut,
        isLogged,
        setIsLogged,
        isLoading,
        setIsLoading
    };
};

export default useFirebase;