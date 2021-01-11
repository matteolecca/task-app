import React from 'react';
import classes from './Userinfo.module.css'
const Userinfo = props => {
    return (
        <div className={classes.Userinfo}>
            <img className={classes.Usericon} alt="" src='icon.jpg'></img>
            <span className={classes.Username}>{props.username || 'Matteo Lecca'}</span >
            <span className={classes.Userrole}>{props.role || 'Developer'}</span>
        </div>
    );
};

export default Userinfo;