import React from 'react';
import classes from './ActiveTasksList.module.css'
import Titlebar from '../../components/Titlebar/Titlebar';
import EmptyTaskPlaceholder from '../../components/EmptyTaskPlaceholder/EmptyTaskPlaceholder';
import { connect } from 'react-redux';
import ListSkeleton from '../../components/LoadingSkeleton/ListSkeleton';
import ActiveListItem from './ActiveListItem/ActiveListItem';

const ActiveTasksList = props => {
    const { tasks, loading, openInfo, modalHandler } = props
    const tasksComponent =
        <div className={classes.ListContainer}>
            {tasks.map(project => {
                return (
                <ActiveListItem openInfo={openInfo}  key={project.ID} project={project}/>
                )
            })}
        </div>

    const tasksPlaceholder = <EmptyTaskPlaceholder type="active" />

    return (
        <div className={classes.ActiveTasksList}>
            <Titlebar modalHandler={modalHandler} />
            {loading ? <ListSkeleton count={tasks.length} /> :
                tasks.length === 0 ? tasksPlaceholder : tasksComponent}
        </div>
    );
};

const State = state => {
    return {
        tasks: state.tasksReducer.tasks.active,
        loading: state.tasksReducer.loading
    }
}



export default connect(State)(ActiveTasksList);