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
                    <DailyIcon  />
                    <label>Daily working hours</label>
                </div>
                <div className={classes.DailyDataContainer}>
                    <label><strong>{props.hpd}</strong></label>
                </div>
            </div>
            <div className={classes.RoutineContainer}>
                <div className={classes.IconContainer}>
                    <TaskIcon  />
                    <label>Active tasks</label>
                </div>
                <div className={classes.DailyDataContainer}>
                    <label>
                        {props.loading ?  <Spinner main/> : <strong>{props.tasksCount}</strong>}
                    </label>
                </div>
            </div>
        </div>
    );
};

const State = state => {
    return {
        tasksCount: state.tasksReducer.tasks.active.length,
        loading: state.tasksReducer.loading,
        hpd : state.authReducer.user.hoursperday
    }
}

export default connect(State)(DailyRoutine);        