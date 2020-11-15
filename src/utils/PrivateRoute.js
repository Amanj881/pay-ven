import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import Dashboard from '../admin/dashboard'

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
	
  return (
  	<div className="">
      <Dashboard />
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/admin-login', state: { from: props.location } }} />}
    />
    </div>
  )
}

export default PrivateRoute;