import React from 'react';
import classes from './ActiveTasksList.module.css'
import Titlebar from '../../components/Titlebar/Titlebar';
import EmptyTaskPlaceholder from '../../components/EmptyTaskPlaceholder/EmptyTaskPlaceholder';
import { connect } from 'react-redux';
import ListSkeleton from '../../components/LoadingSkeleton/ListSkeleton';
import ActiveListItem from '../../components/ActiveListItem/ActiveListItem';
const ActiveTasksList = props => {

    const refresh = () => {
        props.reloadTasks()
    }

    const tasksComponent =
        <div className={classes.ListContainer}>
            {props.tasks.map(project => {
                return (
                <ActiveListItem openInfo={props.openInfo} height={project.hoursperday} key={project.ID} project={project}/>
                )
            })}
        </div>

    const tasksPlaceholder = <EmptyTaskPlaceholder type="active" />

    return (
        <div className={classes.ActiveTasksList}>
            <Titlebar loading={props.loading} refresh={refresh} modalHandler={props.modalHandler} />
            {props.loading ? <ListSkeleton count={props.tasks.length} /> :
                props.tasks.length === 0 ? tasksPlaceholder : tasksComponent}
        </div>
    );
};

const State = state => {
    return {
        tasks: state.tasksReducer.tasks.active,
        loading: state.tasksReducer.loading
    }
}

const Actions = dispatch => {
    return {
        reloadTasks: () => dispatch({ type: 'LOAD_TASKS' })
    }
}


export default connect(State, Actions)(ActiveTasksList);