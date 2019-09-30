import React from 'react';
import {Redirect, Route} from "react-router-dom";
import auth from './auth'

const AuthRoute = ({component: Component, ...props}) => (
    <Route
        {...props}
        render={props =>
            auth.isLogged() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export default AuthRoute;