import React from 'react';
import classes from './ActivitySummary.module.css'
import TodayIcon from '@material-ui/icons/Today';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
const ActivityContainer = props => {

    const { setTasktype, status, type } = props

    const selected = status === type ? classes[type] : null
    return (
        <div onClick={() => setTasktype(type)} className={[classes.ActivityContainer, classes.selected, selected].join(' ')}>
            <div >
                <TodayIcon />
                <span>{type}</span>
            </div>
            <span className={classes.taskCount}>{props.tasks[type].length}</span>
        </div>
    );
};
const Actions = dispatch => {
    return {
        setTasktype: (type) => dispatch({ type: actions.SELECT_TASK_TYPE, tasktype: type }),
    }
}
export default connect(null, Actions)(ActivityContainer);