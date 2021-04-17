import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Forminput from '../../components/Forminput/Forminput';
import classes from './Loginform.module.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Linkrow from '../../components/Forminput/Linkrow/Linkrow'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SignupContext from '../../hooks/signup-hook'
import NameIcon from '@material-ui/icons/RecentActors';
import Select from '../../UI/Select/Select';
import { connect } from 'react-redux';

const Signup = props => {
    const { form, setValue, valid, errorMessage} = SignupContext()
    const {signup, logging, error} = props
    const[hoursperday, setHoursPerDay] = useState(1)
    
    const signuphandler = (event) =>{
        event.preventDefault()
        signup({
            name : form.name.value,
            email : form.email.value,
            password : form.password.value,
            hoursperday : hoursperday})
    }

    const onChangeHandler = (value, type, ID) =>{
        setValue(value, type, ID)
    }
    const onInputChangeHandler = (value) =>{
        setHoursPerDay(value)
    }
    
    return (
        <div className={classes.Login}>
            <form onSubmit={(event) =>signuphandler(event)} className={classes.Loginform}>
                    <img alt="" src="app-logo.png"></img>
                <Forminput valid={form.name.valid} onchange={onChangeHandler} type="text" ID="name" first placeholder="Your name"><NameIcon/></Forminput>
                <Forminput valid={form.email.valid} onchange={onChangeHandler} type="email" ID="email"  placeholder="Email"><MailOutlineIcon/></Forminput>
                <Forminput valid={form.password.valid} onchange={onChangeHandler} type="password" ID="password" placeholder="Password"><VpnKeyIcon/></Forminput>
                <Forminput valid={form.repeatedpassword.valid} onchange={onChangeHandler} type="password" ID="repeatedpassword" last placeholder="Repeat password"><VpnKeyIcon/></Forminput>
                <Linkrow left="" linkleft="/" right="Login" linkright="/login"/>
                <Select onchange={onInputChangeHandler} title="Hours per day"/>
                <p className={classes.errorMessage}>{error ||errorMessage}</p>
                <Button disabled={!valid} loading={logging} medium >Signup</Button>
            </form >
        </div>
    );
};
const State = state =>{
    return {
      logging : state.authReducer.logging,
      error : state.authReducer.errorMessage
    }
  }
  
const Actions = dispatch =>{
    return {
        signup : (user)=> dispatch({type : 'SIGNUP', user : user})
    }
}
export default connect(State, Actions) (Signup);