/**
 * Created by ovesh on 25/8/20.
 */
import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import {useState} from "react";
import {Link} from "react-router-dom";
import fire from './firebase';
import history from './history';




function Form(props) {

    const {links , name , action } = props.value.data;

    const [ user , UserState] = useState({username:'',password:''});
    const {username , password} = user;



    const update = (event) => {
        const {name , value} = event.target;

        UserState(
            data => ({
                ...data,[name]:value
            })
        );
    };

    const login = (e)=> {

        e.preventDefault();
        console.log(action);
        if(action === 'signUp') {
            fire.auth().createUserWithEmailAndPassword(user.username,user.password).then(
                (res) =>{
                    console.log(res);
                    history.push("/home");

                }
            ).catch(
                (err) => {
                    alert(err.message);
                }
            );


        }
        if(action === 'login') {
            localStorage.setItem('isLogin', 'true');
            fire.auth().signInWithEmailAndPassword(user.username, user.password).then(
                (res) => {
                    console.log(res);
                    history.push("/home");
                }
            ).catch(
                err => {
                    alert(err.message);
                    console.log(err);
                }
            );

        }



        if(action === 'resetPass'){
            fire.auth().sendPasswordResetEmail(user.username).then(
                (res)=>{
                    console.log(res);
                }
            ).catch(
                (err) =>{
                    alert(err.message);
                }
            );
        }
    };

    return (
        <div>


            <Typography align={'center'}>
                Or Go Basics
            </Typography>
            <hr width={'60%'}/>
            <Grid   container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center">
                <form style={{
                    display:'flex',
                    flexDirection:'column',
                    width:'60%',
                    justifyContent:'center'
                }} onSubmit={login}
                >
                    <input type="text"
                           name="username"
                           required
                           value={username}
                           onChange={update}
                           style={{padding: "10px 0px", margin:'20px 0px', width:'100%'}}
                           placeholder="Enter UserName"/>
                    {
                        action !== 'resetPass' ?
                            <input type="password"
                                   name="password"
                                   required
                                   value={password}
                                   onChange={update}
                                   style={{padding: "10px 0px", margin:'20px 0px', width:'100%'}}
                                   placeholder="Enter Password"/>
                            : ''
                    }
                    <input type="submit"
                           style={{padding: "10px 0px", margin:'20px 0px', width:'100%'}}/>
                </form>
            </Grid>
            <div align="center"
                 style={{
                     padding:'50px 50px'
                 }}>
                <Link to={links}>{name}</Link>
                <hr width='30%'/>
                {
                    action !== 'resetPass' ? <Link to="resetPassword">Reset Password</Link> : ""
                }
            </div>
        </div>

    );

}

export default Form ;
