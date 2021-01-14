import React  from 'react';
import Forminput from '../../components/Forminput/Forminput';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Newtask.module.css'
import Datepicker from '../../components/Datepicker/Datepicker'
import Task from '@material-ui/icons/AssignmentTurnedInOutlined';
import Colorbar from '../../components/Colorbar/Colorbar';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import StartdateIcon from '@material-ui/icons/Today';
import EnddateIcon from '@material-ui/icons/EventBusy';
import CancelIcon from '@material-ui/icons/Cancel';
import Transition from '../../components/Transition/transition';
import newTaskContext from '../../hooks/new-task-hook'
import { connect } from 'react-redux';

const Newtask = props => {
    const { setValue, task, valid, message, resetForm } = newTaskContext()
    const opened = props.opened ? classes.opened : classes.closed
    

    const handleSubmission = (e)=> {
        e.preventDefault()
        props.close()
        props.createTask(task)
        resetForm()
    }

    const handleValueChange = (value, type) =>{
       setValue(value, type)
    }

    const handleSelected =  (e) =>{
        
    }
    return (
        <Transition
        transition={props.opened}>
        <React.Fragment>
            <div className={[classes.NewtaskContainer, opened].join(' ')}>
                <form onSubmit={(e)=>handleSubmission(e)}>
                    <div onClick={props.clicked} className={classes.closeButton}>
                        <CancelIcon />
                    </div>
                    <img alt="" className={classes.logo} src="app-logo.png"></img>
                    <Forminput valid={valid} onselect={handleSelected} onchange={handleValueChange} ID="TEXT" first type="text" placeholder="Task name">
                        <Task />
                    </Forminput>
                    <Datepicker onselect={handleSelected} ID="START_DATE" onchange={handleValueChange} placeholder="Start date" type="start" label="Start date" ><StartdateIcon /></Datepicker>
                    <Datepicker onselect={handleSelected} ID="END_DATE" onchange={handleValueChange} last placeholder="End date" type="end" label="End date" ><EnddateIcon /></Datepicker>
                    <Select onselect={handleSelected} ID="PRIORITY" onchange={handleValueChange}/>
                    <Colorbar ID="COLOR" onchange={handleValueChange}/>
                    <p className={classes.errorMessage}>{message}</p>
                    <Button disabled={!valid} medium>Create Task</Button>
                </form>
               
            </div>
            <Backdrop clicked={props.close} opened={props.opened } />
        </React.Fragment>
         </Transition>
    );
};
const Actions = dispatch => {
    return {
        reloadTasks : () => dispatch({type:'LOAD_TASKS'}) ,
        createTask : (task) => dispatch({type:'CREATE_TASK', task : task})
    }
}
export default connect(null,Actions)(Newtask);