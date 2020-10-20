/**
 * Created by ovesh on 25/8/20.
 */
import React from 'react';
import Form from "./Form";
/*
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
*/


function ResetPass(){
    const data={
      links:'/',
        name:'Login',
        action:'resetPass'
    };
    return (
        <div>
            <Form value={{data}}/>
        </div>
    );
}


export default ResetPass;