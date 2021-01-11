import React from 'react';
import Logout from '@material-ui/icons/ExitToAppRounded';
import classes from './Logoutview.module.css'
const Logoutview = props => {
    
    const logout = () =>{
        props.logout()
        console.log("REMOVED")
    }
    return (
        <div onClick={logout} className={classes.Logoutview}>
            <Logout fontSize="large" className={classes.logoutIcon}/>
            <h2 className={classes.logoutMessage}>Logout</h2>
        </div>
    );
};

export default Logoutview;

