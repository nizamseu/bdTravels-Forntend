import { Button } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const {user,isLoading,setIsLoading,handleGoogleSignIn}= useFirebase();
    const { from } = location.state || { from: { pathname: "/" } };
    const url =from.pathname
    
  console.log(url);

    if(isLoading){
        return<div>
                <h1>Loadding....</h1>
        </div>
    }
        // redirect with google sign in 
        const signInWithGoogle=()=>{
            handleGoogleSignIn()
            .then((result) => {
                console.log(result);
                history.push(url)
              }).finally(()=> setIsLoading(false));
       }

    return (
        <div>
            <h1>Login</h1>
            <Button onClick={signInWithGoogle}>Login</Button>
        </div>
    );
};

export default Login;