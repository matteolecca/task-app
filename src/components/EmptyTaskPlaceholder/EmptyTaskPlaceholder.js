import React from 'react';
import classes from './EmptyTaskPlaceholder.module.css'
const EmptyTaskPlaceholder = props => {
    return (
        <div className={classes.EmptyTaskPlaceholder}>
            <div className={classes.placeholderContainer}>
            <h4>No {props.type} tasks present</h4>
            {/* <img alt="" src="empty.svg"/> */}
            </div>
        </div>
    );
};

export default EmptyTaskPlaceholder;