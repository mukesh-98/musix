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
    let auth = null;
    const user =  localStorage.getItem('isLogin');
    console.log(user);
    if(user === 'true'){
        auth = true;
    }else{
        auth = false;
    }


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
