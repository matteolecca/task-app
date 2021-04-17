import React from 'react';
import classes from './TaskOverview.module.css'
const TaskInfo = props => {
    return (
        <div className={classes.TaskInfo}>
            {props.children}
            <label>{props.value}</label>
        </div>
    );
};

export default TaskInfo;