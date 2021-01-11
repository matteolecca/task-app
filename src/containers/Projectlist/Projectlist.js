import React, { useEffect, useState } from 'react';
import Listitem from '../../components/Listitem/Listitem';
import classes from './Projectlist.module.css'
import { connect } from 'react-redux'
import Activitysummary from '../ActivitySummary/ActivitySummary';
import EmptyTaskPlaceholder from '../../components/EmptyTaskPlaceholder/EmptyTaskPlaceholder';
import ListSkeleton from '../../components/LoadingSkeleton/ListSkeleton';
import ColumnsSkeleton from '../../components/LoadingSkeleton/ColumnsSkeleton';
const Projectlist = props => {
    const [typeSelected, selectType] = useState('active')
    const [tasks, setTasks] = useState(props.tasks.active)
    const [animation, setAnimation] = useState(false)
    const propsTasks = props.tasks

    const selectTypeHandler = type => {
        setAnimation(true)
        selectType(type)
        setTimeout(() => {
            setAnimation(false)
        }, 1000);
    }

    useEffect(() => {
        setTasks(propsTasks[typeSelected])
    }, [setTasks, propsTasks, typeSelected])

    const emptyPlaceholder = <EmptyTaskPlaceholder />
    const activitySum = <Activitysummary type={typeSelected} selectType={selectTypeHandler} tasks={props.tasks} />
    const tasksComponent =
        <div className={classes.ListContainer}>
            {tasks.map(project => {
                return <Listitem project={project} key={project.ID} />
            })}
        </div>

    const skeleton = <ListSkeleton count={props.tasks[typeSelected].length} />
    const activitySkeleton = <ColumnsSkeleton />

    return (
        <div className={classes.Projectlist}>
            <h2>All Tasks</h2>
            {props.loading ? activitySkeleton : activitySum}
            {props.loading || animation ? skeleton :
                props.tasks[typeSelected].length === 0 ? emptyPlaceholder : tasksComponent}
        </div>
    );
};
const State = state => {
    return {
        tasks: state.tasksReducer.tasks,
        loading: state.tasksReducer.loading
    }
}


export default connect(State)(Projectlist);