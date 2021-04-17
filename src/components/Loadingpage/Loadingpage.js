import React from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Loadingpage.module.css'
const Loadingpage = () => {
    return (
        <div className={classes.Loadingpage}>
            <img alt="" src="app-logo.png"/>
            <Spinner big/>
        </div>
    );
};

export default Loadingpage;