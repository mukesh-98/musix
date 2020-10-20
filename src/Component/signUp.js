/**
 * Created by ovesh on 25/8/20.
 */
import React from 'react';

import Form from "./Form";



function SignUp(){
    const data={
        links:'/',
        name:"Login",
        action:'signUp'
    };
    return (
        <div>
           <Form value={{data}}/>
        </div>
    );
}


export default SignUp;