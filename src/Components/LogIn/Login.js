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
            <h1 style={{margin:'30px 0'}}>Login from</h1>
            <div className='d-flex justify-content-center  mx-auto ' style={{height:'250px',width:'300px',padding:'30px',boxShadow:'10px 10px 15px gray',borderRadius:'20px'}}>
            <div>
                <h6 style={{marginBottom:'100px'}}>Login with Google</h6>
            <Button type="primary" danger onClick={signInWithGoogle}>Login With Google</Button>
            </div>
            </div>
            
            
        </div>
    );
};

export default Login;