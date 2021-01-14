import React, { useState } from 'react';
import Logout from '@material-ui/icons/ExitToAppRounded';
import classes from './Logoutview.module.css'
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';
const Logoutview = props => {
    const[loggingOut, startLogout] = useState(false)
    const logout = () =>{
        startLogout(true)
        setTimeout(() => {
            startLogout(false)
            props.logout()
        }, 1000);
    }
    const animated = loggingOut ? classes.animated : null
    return (
        <div onClick={logout} className={classes.Logoutview}>
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

