import React from 'react';
import classes from './ActiveListItem.module.css'
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import { getCompletionPercentage } from '../../helper/taskCompletionPercentage';
const ActiveListItem = props => {
    const height = props.height < 1 ? 0.9 : props.height

    const selectTask = () =>{
        props.openInfo(true)
        props.selectTask(props.project)
    }



    return (
        <div  className={classes.ActiveContainer}
            style={{ height: `${height * 50}px` }}>
            <div className={classes.TaskCompletion}>
                <label><strong>COMPLETED</strong></label>
                <label>{getCompletionPercentage(props.project)}%</label>
            </div>
            <div onClick={selectTask} style={{ backgroundColor: props.project.color }} className={classes.ActiveListItem} >
                <label><strong>{props.project.text}</strong></label>
                <label>{props.project.hoursperday} HRS</label>

            </div>
            <div className={classes.RadioContainer}>
                <Radio
                    style={{ color: props.color }}
                    checked={false}
                    onChange={() => props.completeTask(props.project.ID)}
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
        selectTask : (task) => dispatch({type:actions.TASK_SELECTED, task : task})
    }
}
export default connect(null, Actions)(ActiveListItem);