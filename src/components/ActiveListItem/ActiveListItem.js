import React from 'react';
import classes from './ActiveListItem.module.css'
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';

const ActiveListItem = props => {
    const height = props.height < 1 ? 0.9 : props.height
    return (
        <div className={classes.ActiveContainer}
            style={{ height: `${height * 50}px` }}>
            <label>{props.project.hoursperday} HRS</label>
            <div style={{ backgroundColor: props.project.color }} className={classes.ActiveListItem} >
                <label><strong>{props.project.text}</strong></label>
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

const Actions = dispatch =>{
    return {
        completeTask : (taskID)=> dispatch({type:'COMPLETE_TASK', taskID : taskID})
    }
}
export default connect(null,Actions)(ActiveListItem);