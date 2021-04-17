import React from 'react';
import classes from './ActiveListItem.module.css'
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions'
import { getCompletionPercentage } from '../../../helper/taskCompletionPercentage';
const ActiveListItem = props => {
    console.log(props.project)
    const { text, color, hoursperday, ID } = props.project
    const { userHpd, openInfo, selectTask,completeTask, project } = props
    const height = hoursperday / userHpd * 100 * 4
    // const finalHeight = height > 10 ? height - (10 / 100 * height) : 10
    const title = text.length > 15 ? `${text.substring(0, 15)}...` : text

    const selectTaskHandler = () => {
        openInfo(true)
        selectTask(project)
    }
    return (
        <div className={classes.ActiveContainer}
            style={{ height: `${height}px` }}>
            <div className={classes.TaskCompletion}>
                <label className={classes.activelabel}><strong>COMPLETED</strong></label>
                <label className={classes.activelabel}>{getCompletionPercentage(project).toFixed(0)}%</label>
            </div>
            <div onClick={selectTaskHandler} style={{ backgroundColor: color }} className={classes.ActiveListItem} >
                <span className={classes.activelabel}><strong>{title}</strong></span>
                <span className={classes.activelabel}>{hoursperday} HRS</span>
            </div>
            <div className={classes.RadioContainer}>
                <Radio
                    style={{ color:color }}
                    checked={false}
                    onChange={() =>completeTask(ID)}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </div>
        </div>
    );
};

const Actions = dispatch => {
    return {
        completeTask: (taskID) => dispatch({ type: actions.COMPLETE_TASK, taskID: taskID }),
        selectTask: (task) => dispatch({ type: actions.TASK_SELECTED, task: task })
    }
}
const State = state => {
    return {
        userHpd: state.authReducer.user.hoursperday
    }
}

export default connect(State, Actions)(ActiveListItem);


