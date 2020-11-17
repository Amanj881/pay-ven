import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from "./auth-service";
import Dashboard from '../admin/dashboard'

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
	 const currentUser = AuthService.getCurrentUser()
  return (
  	<div className="">
      <Dashboard />
    <Route
      {...rest}
      render={(props) => currentUser && currentUser.user.role === 'admin' ? <Component {...props} /> 
      : <Redirect to={{ pathname: '/admin-login', state: { from: props.location } }} />}
    />
    </div>
  )
}

export default PrivateRoute;