import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import Dash from '../user/userDashboard'

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
  	<>
  	<Dash />
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
    />
    </> 
  )
}

export default PublicRoute;