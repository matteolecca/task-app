import React from 'react';
import classes from './Userinfo.module.css'
import User from '../sidedrawer/Userinfo/Userinfo'
const Userinfo = () => {
    return (
        <div className={classes.Userinfo}>
            <User/>
        </div>
    );
};

export default Userinfo;