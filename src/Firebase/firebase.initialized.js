import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const firebaseInitialized =()=>{
 initializeApp(firebaseConfig);
}

export default firebaseInitialized;