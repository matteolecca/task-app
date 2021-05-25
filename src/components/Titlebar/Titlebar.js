import React from 'react';
import classes from './Titlebar.module.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Restartbutton from '../../UI/Itembutton/Restartbutton';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

const Titlebar = props => {
    const { reloadTasks, loading, modalHandler } = props

    return (
        <div className={classes.Titlebar}>
            <div className={classes.row}>
                <h2 className={classes.Title}>Today's tasks</h2>
                <div className={classes.Barbuttoncontainer}>
                    <Tooltip placement="left" title="new task"><button onClick={modalHandler}><AddCircleIcon /></button></Tooltip>
                    <Restartbutton loading={loading} clicked={reloadTasks} />
                </div>
            </div>
        </div>
    );
};
const Actions = dispatch => {
    return {
        reloadTasks: () => dispatch({ type: 'LOAD_TASKS' })
    }
}
const State = state => {
    return {
        loading: state.tasksReducer.loading
    }
}

export default connect(State, Actions) (Titlebar);

