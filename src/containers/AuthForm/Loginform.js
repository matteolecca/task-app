import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Forminput from '../../components/Forminput/Forminput';
import classes from './Loginform.module.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Linkrow from '../../components/Forminput/Linkrow/Linkrow'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LoginContext from '../../hooks/login-hook'
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
const Loginform = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (event) => {
        event.preventDefault()
        props.login({ email: email, password: password })
    }

    useEffect(() => {
        console.log("error", props.error)
        document.body.style.overflow = "auto"
    }, [props])

    const content =
        (!props.auth ?
            <div className={classes.Login}>
                <form onSubmit={(event) => loginHandler(event)} className={classes.Loginform}>
                    <img alt="" src="app-logo.png"></img>
                    <Forminput onchange={setEmail} type="email" first placeholder="Email"><MailOutlineIcon /></Forminput>
                    <Forminput onchange={setPassword} type="password" last placeholder="Password"><VpnKeyIcon /></Forminput>
                    <Linkrow left="Forgot password?" linkleft="/frgtpassword" right="Signup" linkright="/signup" />
                    <p className={classes.errorMessage}>{props.error}</p>
                    <Button  loading={props.logging} medium >Login</Button>
                </form >
            </div>
            :
            <Redirect to="/"></Redirect>)
    return content
};
const State = state =>{
    return {
      logging : state.authReducer.logging,
      error : state.authReducer.errorMessage
    }
  }
  
const Actions = dispatch =>{
    return {
        login : (user)=> dispatch({type : 'LOGIN', user : user})
    }
}
export default connect(State, Actions) (Loginform);