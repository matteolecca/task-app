import React from 'react';
import classes from './ActivitySummary.module.css'
import TodayIcon from '@material-ui/icons/Today';

const ActivityContainer = props => {
    const selected = props.status === props.type ? classes[props.type] : null
    return (
        <div onClick={()=>props.selectType(props.type)} className={[classes.ActivityContainer, classes.selected, selected].join(' ')}>
        <div >
            <TodayIcon  />
            <label>{props.type}</label>
        </div>
        <label className={classes.taskCount}>{props.tasks[props.type].length}</label>
    </div>
    );
};

export default ActivityContainer;