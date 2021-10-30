import { Button } from 'antd';
import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {handleGoogleSignIn}= useFirebase();

        // redirect with google sign in 
        const signInWithGoogle=()=>{
            handleGoogleSignIn()
            .then((result) => {
               
              });
       
        }
    return (
        <div>
            <h1>Login</h1>
            <Button onClick={handleGoogleSignIn}>Login</Button>
        </div>
    );
};

export default Login;