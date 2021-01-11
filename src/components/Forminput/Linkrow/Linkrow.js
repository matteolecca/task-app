import React from 'react';
import classes from './Linkrow.module.css'
import { NavLink } from 'react-router-dom'
const Linkrow = props => {
    return (
        <div className={classes.Linkrow}>
            <NavLink to={props.linkleft}>{props.left}</NavLink>
            <NavLink to={props.linkright}>{props.right}</NavLink >
        </div>
    );
};

export default Linkrow;