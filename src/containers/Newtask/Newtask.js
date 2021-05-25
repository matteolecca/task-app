import React, { useEffect, useState } from 'react';
import Forminput from '../../components/Input copy/Input';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Newtask.module.css'
import Datepicker from '../../components/MaterialDate/MaterialDate'
import Colorbar from '../../components/Colorbar/Colorbar';
import Button from '../../UI/Button/Button';
import Select from '../../components/Select/Select';
import StartdateIcon from '@material-ui/icons/Today';
import CancelIcon from '@material-ui/icons/Cancel';
import Transition from '../../components/Transition/transition';
import newTaskContext from '../../hooks/new-task-hook'
import { connect } from 'react-redux';
import moment from 'moment'
import logoDark from '../../images/app-logo-dark.png'
import logo from '../../images/app-logo.png'
const Newtask = props => {
    const { appearenceStyle, createTask, editTask, close, opened } = props
    const { setValue, task, setTask, validText, validDate, message, resetForm } = newTaskContext(props.task)
    const [startSelected, selectStart] = useState(false)
    const openedClass = opened ? classes.opened : classes.closed

    useEffect(() => {
        if (props.task) {
            setTask(props.task)
            selectStart(props.task.start_date)
        }
    }, [props.task, setTask])

    const handleSubmission = () => {
        close()
        if (!props.task) createTask(task)
        else {
            const taskCopy = { ...task }
            taskCopy.start_date = moment(task.start_date).format('YYYY-MM-DD')
            taskCopy.end_date = moment(task.end_date).format('YYYY-MM-DD')
            editTask(taskCopy)
        }
        resetForm()
        props.resetTask(null)
    }
    const handleClosing = () => {
        resetForm()
        props.resetTask(null)
        close()

    }

    const handleValueChange = (value, type) => {
        console.log(value, type)
        if (type === 'START_DATE') selectStart(true)
        setValue(value, type)
    }

    const handleSelected = (e) => {
        e.preventDefault()
    }
    return (

        <Transition
            transition={opened}>
            <div className={[classes.NewtaskContainer, openedClass].join(' ')}>
                <div onClick={handleClosing} className={classes.closeButtonContainer}>
                    <CancelIcon className={classes.closeButton} />
                </div>
                <form >
                    <img alt="" className={classes.logo} src={appearenceStyle === 'light' ? logo : logoDark}></img>
                    <Forminput value={task.text} valid={validText} onselect={handleSelected} onchange={handleValueChange} ID="text" first type="text" placeholder="Task name" />
                    <div className={classes.DateContainer}>
                        <Datepicker date={task.start_date} disabled={false} mindate={task.start_date} onselect={handleSelected} ID="START_DATE" onchange={handleValueChange} placeholder="Start date" type="start" label="Start date" ><StartdateIcon /></Datepicker>
                        <Datepicker date={task.end_date} disabled={!startSelected} mindate={task.start_date} last onselect={handleSelected} ID="END_DATE" onchange={handleValueChange} placeholder="End date" type="end" label="End date" ><StartdateIcon /></Datepicker>
                    </div>
                    <Select value={task.priority} title="Priority" ID="PRIORITY" onchange={handleValueChange} />
                    <Colorbar ID="COLOR" onchange={handleValueChange} />
                    <label className={classes.errorMessage}>{message}</label>
                    <Button onclick={handleSubmission} disabled={!validText || !validDate} medium>{props.task ? 'Edit Task' : 'Create Task'}</Button>
                </form>
            </div>
            <Backdrop clicked={handleClosing} opened={opened} />
        </Transition>
    );
};
const State = state => {
    return {
        appearenceStyle: state.appearenceReducer.style
    }
}
const Actions = dispatch => {
    return {
        reloadTasks: () => dispatch({ type: 'LOAD_TASKS' }),
        createTask: (task) => dispatch({ type: 'CREATE_TASK', task: task }),
        editTask: (task) => dispatch({ type: 'EDIT_TASK', task: task })
    }
}
export default connect(State, Actions)(Newtask);