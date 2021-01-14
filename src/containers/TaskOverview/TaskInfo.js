import React from 'react';
import classes from './TaskOverview.module.css'
const TaskInfo = props => {
    return (
        <div className={classes.TaskInfo}>
            {props.children}
            <span>{props.value}</span>
        </div>
    );
};

export default TaskInfo;