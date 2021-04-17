import React from 'react';
import classes from './TransparentButton.module.css'
const TransparentButton = props => {
    return (
        <button className={classes.TransparentButton} onClick={props.onclick }>
            {props.children}
        </button>
    );
};

export default TransparentButton;