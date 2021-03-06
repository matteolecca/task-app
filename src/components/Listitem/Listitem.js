import React, { useState } from 'react';
import classes from './Listitem.module.css'
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Calendar from '@material-ui/icons/EventBusy';
import TimeIcon from '@material-ui/icons/AccessTime';
import DeleteModal from '../Modal/DeleteModal';
const Listitem = props => {
    const {  project, setTask, edit } = props
    const { color, text, end_date, priority, hoursperday, ID } = project
    const date = end_date ? new Date(end_date).toDateString() : null
    const [modalShowed, showModal] = useState(false)
    let height = {}

    const selectTaskHandler = task => {
        setTask(project)
        edit(true)
    }
    const handleClosing = bool => showModal(bool)
    let taskType =
        <div style={{ color: color }} className={classes.Prioritycontainer}>
            <LabelOutlinedIcon style={{ color: color }} />
            <label className={classes.priority}>Priority {priority}</label>
        </div>

    if (props.activeTask) {
        const hgt = props.height * 80
        height = { height: `${hgt}px` }
        taskType =
            <div style={{ color: color }} className={classes.Prioritycontainer}>
                <TimeIcon style={{ color: color }} />
                <label className={classes.priority}>Hours {hoursperday}</label>
            </div>
    }

    return (
        <React.Fragment>
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
                    <button onClick={() => handleClosing(true)}><DeleteIcon style={{ color: color }} /></button>
                    <button onClick={selectTaskHandler} ><EditIcon style={{ color: color }} /></button>
                </div>
            </div>
            {modalShowed ? <DeleteModal ID={ID} close={() => handleClosing(false)} /> : null}

        </React.Fragment>
    )
};


export default (Listitem);