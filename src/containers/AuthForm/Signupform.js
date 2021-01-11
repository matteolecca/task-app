import React, {  useState } from 'react';
import Button from '../../components/Button/Button';
import Forminput from '../../components/Forminput/Forminput';
import classes from './Loginform.module.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Linkrow from '../../components/Forminput/Linkrow/Linkrow'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SignupContext from '../../hooks/signup-hook'
import NameIcon from '@material-ui/icons/RecentActors';
import Select from '../../components/Select/Select';
const Signup = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { result, loading, signup} = SignupContext()

    const signuphandler = (event) =>{
        event.preventDefault()
        signup({email : email , password : password})
    }
    
    return (
        <div className={classes.Login}>
            <form onSubmit={(event) =>signuphandler(event)} className={classes.Loginform}>
                    <img alt="" src="app-logo.png"></img>
                <Forminput onchange={setEmail} type="name" first placeholder="Your name"><NameIcon/></Forminput>
                <Forminput onchange={setEmail} type="email"  placeholder="Email"><MailOutlineIcon/></Forminput>
                <Forminput onchange={setPassword} type="password" placeholder="Password"><VpnKeyIcon/></Forminput>
                <Forminput onchange={setPassword} type="password"last placeholder="Repeat password"><VpnKeyIcon/></Forminput>
                <Linkrow left="" linkleft="/" right="Login" linkright="/login"/>
                <Select/>
                <p className={classes.errorMessage}>{result.error}</p>
                <Button loading={loading} medium >Signup</Button>
            </form >
        </div>
    );
};

export default Signup;