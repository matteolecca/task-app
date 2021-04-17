import React, { useEffect } from 'react';
import classes from './Popup.module.css'
import Task from '@material-ui/icons/AssignmentTurnedInOutlined';
import Transition from '../Transition/transition';
import { connect } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
const Popup = props => {
    const {success, error, message,  closeModal} = props

    const opened = success || error ? classes.opened : classes.closed
    const color = error ? classes.error : null

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                closeModal()
            }, 2000);
        }
    }, [success, error, closeModal])

    return (
        <Transition transition={success || error}>
            <div className={[classes.Popup, opened, color].join(' ')}>
                {error ? <CancelIcon onClick={()=>closeModal()} className={classes.closeIcon}/> : <div></div>}
                <div className={classes.messageRow}>
                    <Task />
                    <span>{message}</span>
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