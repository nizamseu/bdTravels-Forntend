import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useFirebase();
    if(isLoading){
      return <h1>Loadding</h1>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;