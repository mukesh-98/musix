/**
 * Created by ovesh on 26/8/20.
 */
import React from  'react';
import {Route, Router, Switch} from "react-router-dom";

import App from "./App";
import Home from "./Home";
import SignUp from './signUp';
import ResetPass from './resetPass';
import history from "./history";
import AuthGuard from "./AuthGuard";


export  default function Nav(props){
    var auth = false;
    const user =  localStorage.getItem('isLogin');
    console.log(user);
    user ? auth = true : auth = false;


        return(
                <div>
                    <Router history={history}>
                        <Switch>
                            <Route path='/' exact component={App}/>
                            <Route path="/signUp" component={SignUp}/>
                            <AuthGuard path="/home" component={Home} auth={auth}/>
                            <Route path = "/resetPassword" component={ResetPass}/>
                        </Switch>
                    </Router>
                </div>
        )
}