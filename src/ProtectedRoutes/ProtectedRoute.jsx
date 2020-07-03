import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {isConnected} from '../services/authenticationServices';

const ProtectedRoute = ({ component: Component, ...rest }) => {

   return (
      <Route
         {...rest}
         render={props => {
            if (isConnected()) {
               return <Component {...props} />
            } else {
               return <Redirect
                  to={{
                     pathname: '/auth/login',
                     state: {
                        from: props.location
                     }
                  }}
               />
            }
         }
         }
      />
   )
};

export default ProtectedRoute