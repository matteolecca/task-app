import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Forminput from '../../components/Input copy/Input';
import classes from './Loginform.module.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Linkrow from '../../components/Forminput/Linkrow/Linkrow'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SignupContext from '../../hooks/signup-hook'
import NameIcon from '@material-ui/icons/RecentActors';
import Select from '../../components/Select/Select';
import { connect } from 'react-redux';
import logoDark from '../../images/app-logo-dark.png'
import logo from '../../images/app-logo.png'
const Signup = props => {
    const { form, setValue, valid, errorMessage } = SignupContext()
    const { signup, logging, error, appearenceStyle } = props
    const [hoursperday, setHoursPerDay] = useState(1)

    const signuphandler = () => {
        signup({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            hoursperday: hoursperday
        })
    }

    const onChangeHandler = (value, ID, type) => {
        setValue(value, type, ID)
    }
    const onInputChangeHandler = (value) => {
        setHoursPerDay(value)
    }

    return (
        <div className={classes.Login}>
            <form className={classes.Loginform}>
                <img alt="" src={appearenceStyle === 'light' ? logo : logoDark}></img>
                <Forminput valid={form.name.valid} onchange={onChangeHandler} type="text" ID="name" first placeholder="Your name"><NameIcon /></Forminput>
                <Forminput valid={form.email.valid} onchange={onChangeHandler} type="email" ID="email" placeholder="Email"><MailOutlineIcon /></Forminput>
                <Forminput valid={form.password.valid} onchange={onChangeHandler} type="password" ID="password" placeholder="Password"><VpnKeyIcon /></Forminput>
                <Forminput valid={form.repeatedpassword.valid} onchange={onChangeHandler} type="password" ID="repeatedpassword" last placeholder="Repeat password"><VpnKeyIcon /></Forminput>
                <Linkrow left="" linkleft="/" right="Login" linkright="/login" />
                <Select onchange={onInputChangeHandler} title="Hours per day" />
                <p className={classes.errorMessage}>{error || errorMessage}</p>
                <Button onclick={signuphandler} disabled={!valid} loading={logging} medium >Signup</Button>
            </form >
        </div>
    );
};
const State = state => {
    return {
        logging: state.authReducer.logging,
        error: state.authReducer.errorMessage,
        appearenceStyle: state.appearenceReducer.style
    }
}

const Actions = dispatch => {
    return {
        signup: (user) => dispatch({ type: 'SIGNUP', user: user })
    }
}
export default connect(State, Actions)(Signup);