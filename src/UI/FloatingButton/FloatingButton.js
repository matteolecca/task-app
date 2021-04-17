import React from 'react';
import classes from './FloatingButton.module.css'
import Plus from '@material-ui/icons/AddRounded';
const Floatingbutton = props => {
    return (
        <button onClick={props.onclick} className={classes.FloatingButton}>
            <div className={classes.ButtonContents}>
                <span>New Task</span><Plus />
            </div>
        </button>
    );
};

export default Floatingbutton;