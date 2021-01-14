import React from 'react';
import classes from './ActivitySummary.module.css'
import TodayIcon from '@material-ui/icons/Today';
import { connect } from 'react-redux';
import  * as actions from '../../redux/actions'
const ActivityContainer = props => {

    const setType = type =>{
            props.setTasktype(type)
    }
    const selected = props.status === props.type ? classes[props.type] : null
    return (
        <div onClick={()=>setType(props.type)} className={[classes.ActivityContainer, classes.selected, selected].join(' ')}>
        <div >
            <TodayIcon  />
            <label>{props.type}</label>
        </div>
        <label className={classes.taskCount}>{props.tasks[props.type].length}</label>
    </div>
    );
};
const Actions = dispatch=>{
    return{
        setTasktype : (type)=> dispatch({type:actions.SELECT_TASK_TYPE, tasktype: type}),
    }
}
export default connect(null, Actions) (ActivityContainer);