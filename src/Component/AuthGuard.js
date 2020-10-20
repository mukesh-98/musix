/**
 * Created by ovesh on 27/8/20.
 */
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AuthGuard = ({ component: Component, auth, ...rest }) => {
    console.log("auth:" + auth , typeof(auth));
    return(
        <Route {...rest} render={(props) => (
            auth === true
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
};

export default AuthGuard;