import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Forminput from '../../components/Forminput/Forminput';
import classes from './Loginform.module.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Linkrow from '../../components/Forminput/Linkrow/Linkrow'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LoginContext from '../../hooks/login-hook'
import { Redirect } from 'react-router'
const Loginform = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {  result } = LoginContext()

    const loginHandler = (event) => {
        event.preventDefault()
        props.login({ email: email, password: password })
    }

    useEffect(() => {
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
                    <p className={classes.errorMessage}>{result.error}</p>
                    <Button loading={result.loading} medium >Login</Button>
                </form >
            </div>
            :
            <Redirect to="/"></Redirect>)
    return content
};

export default Loginform;