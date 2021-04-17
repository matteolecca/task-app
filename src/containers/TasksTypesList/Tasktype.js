import React from 'react'
import classes from './TasksTypesList.module.css'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'

const TaskType = props =>{
    const selected = props.type === props.typeSelected ? classes.selected : null
    return (
        <div onClick={()=>props.setTasktype(props.type)} className={[classes.TaskType, classes[props.type], selected].join(' ')}>
            {props.children}
            <label>{props.type} tasks</label>
        </div>
    )
}
const State = state => {
    return {
        typeSelected : state.tasksReducer.typeSelected
    }
}
const Actions = dispatch=>{
    return{
        setTasktype : (type)=> dispatch({type:actions.SELECT_TASK_TYPE, tasktype: type}),
    }
}
export default connect(State, Actions) (TaskType)