import React, { useEffect, useState } from 'react';
import classes from '../Auth.module.css'
import authHook from '../../hooks/auth-form-hook'
import icon from '../../images/app-logo.png'
import { LOGIN } from '../../redux/actions'
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';
import Form from '../Form/Form';
import authclasses from '../Auth.module.css'
const Login = props => {
    const { login, loading, message, reset} = props
    const { inputs, keys, setValue, resetInputs, title, links } = authHook('login')
    const [ loadingImg, loadImg] = useState(true)

    const loginHandler = (e)=>{
        e.preventDefault()
        login({email : inputs.email.value, password : inputs.password.value})
    }
    useEffect(()=>{
            resetInputs()
            // reset()
    },[resetInputs, reset])

    return (
        <div className={authclasses.Auth}>
            <div className={authclasses.AuthContainer}>
                {  loadingImg ? <Spinner/> : null}
                <img onLoad={() =>loadImg(false)} src={icon} alt="" />
                <h1 className={classes.Title}>{title}</h1>
                <Form
                keys={keys}
                inputs={inputs}
                errorMessage={message}
                onsubmit={loginHandler}
                links={links}
                loading={loading}
                setValue={setValue}
                submitTitle={title}
                />
            </div>
        </div>
    );
};

const State = state =>{
    return {
      loading : state.authReducer.logging,
      message : state.authReducer.errorMessage,
    }
  }
  
const Actions = dispatch =>{
    return {
        login : (user)=> dispatch({type : LOGIN, user : user})
    }
}
export default connect(State, Actions)(Login);