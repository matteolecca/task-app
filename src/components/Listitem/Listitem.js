import React from 'react';
import classes from './Listitem.module.css'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Calendar from '@material-ui/icons/EventBusy';
import EditIcon from '@material-ui/icons/Edit';
import TimeIcon from '@material-ui/icons/AccessTime';
import { connect } from 'react-redux';
const Listitem = props => {
    console.log(props.height)
    if (!props.project) {
        return <div>Loading...</div>
    }
    const { color, text, end_date, priority, hoursperday, ID } = props.project
    const date = end_date ? new Date(end_date).toDateString() : null
    let height = {}
    let taskType =
        <div style={{ color: color }} className={classes.Prioritycontainer}>
            <LabelOutlinedIcon style={{ color: color }} />
            <label className={classes.priority}>Priority {priority}</label>
        </div>

    if (props.activeTask) {
        const hgt = props.height * 80
        height = { height : `${hgt}px`}
        taskType =
            <div style={{ color: color }} className={classes.Prioritycontainer}>
                <TimeIcon style={{ color: color }} />
                <label className={classes.priority}>Hours {hoursperday}</label>
            </div>
    }

    return (
        <div style={{ backgroundColor: color, ...height }} className={classes.Listitem}>
                    <div className={classes.TaskInfo}>
                        <div className={classes.Prioritycontainer}>
                            <label className={classes.desc}><strong> {text}</strong></label>
                        </div>
                        {taskType}
                        <div style={{ color: color }} className={classes.Prioritycontainer}>
                            <Calendar style={{ color: color }} />
                            <label className={classes.priority}>Ending {date}</label>
                        </div>
                    </div>
                    <div className={classes.Buttonscontainer}>
                        <button onClick={() => props.deleteTask(ID)}><DeleteIcon style={{ color: color }} /></button>
                        <button><EditIcon style={{ color: color }} /></button>
                    </div>
        </div>)
};

const Actions = dispatch => {
    return {
        deleteTask: (taskID) => dispatch({ type: 'DELETE_TASK', taskID: taskID })
    }
}
export default connect(null, Actions)(Listitem);