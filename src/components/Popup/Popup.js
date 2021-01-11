import React, { useEffect } from 'react';
import classes from './Popup.module.css'
import Task from '@material-ui/icons/AssignmentTurnedInOutlined';
import Transition from '../Transition/transition';
import { connect } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
const Popup = props => {
    const success = props.success
    const error = props.error
    const closeModal = props.closeModal
    const opened = props.success || props.error ? classes.opened : classes.closed
    const color = props.error ? classes.error : null

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                closeModal()
            }, 1000);
        }
    }, [success, error, closeModal])

    return (
        <Transition transition={props.success || props.error}>
            <div className={[classes.Popup, opened, color].join(' ')}>
                {props.error ? <CancelIcon onClick={()=>closeModal()} className={classes.closeIcon}/> : <div></div>}
                <div className={classes.messageRow}>
                    <Task />
                    <label>{props.message}</label>
                </div>
            </div>
        </Transition>
    );
};

const State = state => {
    return {
        error: state.operationReducer.error,
        success: state.operationReducer.success,
        message: state.operationReducer.message,
    }
}

const Actions = dispatch => {
    return {
        closeModal: () => dispatch({ type: 'RESET_OPERATIONS' })
    }
}

export default connect(State, Actions)(Popup);