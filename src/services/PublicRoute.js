import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from "./auth-service";
import Dash from '../user/userDashboard'
import Header from '../components/header'

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
  	<div className="flex">
  	<Dash />
  	 <div className="flex flex-col">
      <Header/>
    <Route
      {...rest}
      render={(props) =>  AuthService.getCurrentUser() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
    />
    </div>
    </div> 
  )
}

export default PublicRoute;