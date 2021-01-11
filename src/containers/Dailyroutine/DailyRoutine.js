import React from 'react';
import classes from './Dailyroutine.module.css'
import TaskIcon from '@material-ui/icons/AssignmentTurnedIn';
import DailyIcon from '@material-ui/icons/DateRange';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';
const DailyRoutine = props => {
    return (
        <div className={classes.DailyRoutine}>
            <div className={classes.RoutineContainer}>
                <div className={classes.IconContainer}>
                    <DailyIcon style={{ backgroundColor: '#333333', color: '#ffffff' }} />
                    <label>Daily working hours</label>
                </div>
                <div className={classes.DailyDataContainer}>
                    <label><strong>5</strong></label>
                </div>
            </div>
            <div className={classes.RoutineContainer}>
                <div className={classes.IconContainer}>
                    <TaskIcon style={{ backgroundColor: '#333333', color: '#ffffff' }} />
                    <label>Active tasks</label>
                </div>
                <div className={classes.DailyDataContainer}>
                    <label>
                        {props.loading ?  <Spinner /> : <strong>{props.tasksCount}</strong>}
                    </label>
                </div>
            </div>
        </div>
    );
};

const State = state => {
    return {
        tasksCount: state.tasksReducer.tasks.active.length,
        loading: state.tasksReducer.loading
    }
}

export default connect(State)(DailyRoutine);        