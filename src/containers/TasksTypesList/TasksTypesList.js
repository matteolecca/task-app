import React from 'react';
import HourGlassIcon from '@material-ui/icons/HourglassEmptyRounded';
import CalendarIcon from '@material-ui/icons/DateRangeRounded';
import ClockIcon from '@material-ui/icons/QueryBuilderRounded';
import classes from './TasksTypesList.module.css'
import TaskType from './Tasktype'

const TasksTypesList = props => {
    return (
        <div className={classes.TasksTypesList}>
            <TaskType type="active"><HourGlassIcon/></TaskType>
            <TaskType type="passed"><CalendarIcon/></TaskType>
            <TaskType type="scheduled"><ClockIcon/></TaskType>
        </div>
    );
};





export default (TasksTypesList);