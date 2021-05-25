import React from 'react';
import classes from './Loginform.module.css'
import logoDark from '../../images/app-logo-dark.png'
import logo from '../../images/app-logo.png'
import { connect } from 'react-redux';
const PwdRecoveryForm = props => {
    const { appearenceStyle } = props
    const { inputs, keys, setValue, resetInputs, title, links } = authHook('login')

    return (
        <div className={classes.Login}>
            <form className={classes.Loginform}>
                <img alt="" src={appearenceStyle === 'light' ? logo : logoDark}></img>
            </form >
        </div>
    );
};
const State = state =>{
    return {
      appearenceStyle : state.appearenceReducer.style
    }
  }
  
export default connect(State)(PwdRecoveryForm);