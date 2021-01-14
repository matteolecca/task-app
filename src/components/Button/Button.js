import React from 'react';
import classes from './Button.module.css'
import Spinner from '../../UI/Spinner/Spinner'
const Button = props => {
    const color = props.light ? classes.light : classes.dark
    const fullwidth = props.fullwidth ? classes.fullwidth : null
    const children = props.loading ? <Spinner light/> : props.children
    const disabled = props.disabled ? classes.disabled : null
    return (
        <button disabled={props.disabled} onClick={()=>{}} className={[classes.Button, disabled, color,fullwidth].join(' ')}>
            <div className={classes.messageContainer}>{children}</div >
        </button>
    );
};

export default Button;