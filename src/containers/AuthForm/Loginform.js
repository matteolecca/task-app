import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button/Button';
import Forminput from '../../components/Forminput/Forminput';
import classes from './Loginform.module.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Linkrow from '../../components/Forminput/Linkrow/Linkrow'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { validateInput } from '../../helper/inputValidator'
import logoDark from '../../images/app-logo-dark.png'
import logo from '../../images/app-logo.png'
const Loginform = props => {
    const [email, setEmail] = useState({valid : false, value : ''})
    const [password, setPassword] = useState({valid : false, value : ''})
    const { login, logging, error, auth, appearenceStyle} = props

    const onChange = (value, type) =>{
        if(type === 'email') setEmail({valid : validateInput(value,type), value : value})
        if(type === 'password') setPassword({valid : validateInput(value,type), value : value})
    }
    const loginHandler = (event) => {
        login({ email: email.value, password: password.value })
    }

    useEffect(() => {
        document.body.style.overflow = "auto"
    }, [])

    const content =
        (!auth ?
            <div className={classes.Login}>
                <form className={classes.Loginform}>
                    <img alt="" src={appearenceStyle === 'light' ? logo : logoDark}></img>
                    <Forminput valid={email.valid} onchange={onChange} ID="email" type="email" first placeholder="Email"><MailOutlineIcon /></Forminput>
                    <Forminput valid={password.valid} onchange={onChange} ID="password" type="password" last placeholder="Password"><VpnKeyIcon /></Forminput>
                    <Linkrow left="Forgot password?" linkleft="/frgtpassword" right="Signup" linkright="/signup" />
                    <p className={classes.errorMessage}>{error}</p>
                    <Button onclick={loginHandler} color="dark" disabled={!email.valid || !password.valid} loading={logging} medium >Login</Button>
                </form >
            </div>
            :
            <Redirect to="/"></Redirect>)
    return content
};
const State = state =>{
    return {
      logging : state.authReducer.logging,
      error : state.authReducer.errorMessage,
      appearenceStyle : state.appearenceReducer.style
    }
  }
  
const Actions = dispatch =>{
    return {
        login : (user)=> dispatch({type : 'LOGIN', user : user})
    }
}
export default connect(State, Actions) (Loginform);