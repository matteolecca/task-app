import React, { useState } from 'react';
import Logout from '@material-ui/icons/ExitToAppRounded';
import classes from './Logoutview.module.css'
import { connect } from 'react-redux';
const Logoutview = props => {
    const[loggingOut, startLogout] = useState(false)
    const {logout} = props
    const logoutHandler = () =>{
        startLogout(true)
        setTimeout(() => {
            startLogout(false)
            logout()
        }, 1000);
    }

    const animated = loggingOut ? classes.animated : null
    return (
        <div onClick={logoutHandler} className={classes.Logoutview}>
            <Logout fontSize="large" className={[classes.logoutIcon, animated].join(' ')}/>
            <h2 className={classes.logoutMessage}>{loggingOut ? "Logging out..." :"Logout"}</h2>
        </div>
    );
};
const Actions = dispatch =>{
    return{
        logout : ()=>dispatch({type: 'LOGOUT'})
    }
}

export default connect(null, Actions) (Logoutview);

