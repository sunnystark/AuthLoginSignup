import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={props => (
    //    console.log('private route', props, rest),
       localStorage.getItem('token') 
       ? <Component {...props} /> 
       : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
   )} />
)