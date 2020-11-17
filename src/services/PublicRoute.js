import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from "./auth-service";
import Dash from '../user/userDashboard'

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
  	<>
  	<Dash />
    <Route
      {...rest}
      render={(props) =>  AuthService.getCurrentUser() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
    />
    </> 
  )
}

export default PublicRoute;