import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Button from '../../UI/Button/Button';
import classes from './Modal.module.css'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux';

const Modal = props => {
    const {  close, deleteTask, ID } = props

    const deleteHandler = () => {
        deleteTask(ID)
    }
    const handleClosing = () =>{
        close()
    }

    return (
        <React.Fragment>
            <div className={classes.Modal}>
            <div className={classes.ModalContainer}>
                            <h3>Delete Task</h3>
                            <p>Confirm?</p>
                            <div className={classes.ButtonsContainer}>
                                <Button color="dark" onclick={handleClosing}>Chiudi</Button>
                                {<Button color="red"onclick={deleteHandler} >Cancella</Button>}
                            </div>
                        </div>
            </div>
            <Backdrop opened open />
        </React.Fragment>
    );
};
const Actions = dispatch => {
    return {
        deleteTask: (taskID) => dispatch({ type: actions.DELETE_TASK, taskID: taskID })
    }
}
const State = state => {
    return {
        deleting: false,
        deleted: false,
        date: null,
    }
}
export default connect(State, Actions)(Modal);