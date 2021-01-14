import React, { useEffect, useState } from 'react';
import Listitem from '../../components/Listitem/Listitem';
import classes from './Projectlist.module.css'
import { connect } from 'react-redux'
import Activitysummary from '../ActivitySummary/ActivitySummary';
import EmptyTaskPlaceholder from '../../components/EmptyTaskPlaceholder/EmptyTaskPlaceholder';
import ListSkeleton from '../../components/LoadingSkeleton/ListSkeleton';
import ColumnsSkeleton from '../../components/LoadingSkeleton/ColumnsSkeleton';
const Projectlist = props => {
    const [animation, setAnimation] = useState(false)

    useEffect(()=>{
        setAnimation(true)
        setTimeout(() => {
            setAnimation(false)            
        }, 1000);
    }, [props.typeSelected])

    const emptyPlaceholder = <EmptyTaskPlaceholder />
    const activitySum = <Activitysummary type={props.typeSelected} tasks={props.tasks} />
    const tasksComponent =
        <div className={classes.ListContainer}>
            {props.tasks[props.typeSelected].map(project => {
                return <Listitem project={project} key={project.ID} />
            })}
        </div>

    const skeleton = <ListSkeleton count={props.tasks[props.typeSelected].length} />
    const activitySkeleton = <ColumnsSkeleton />

    return (
        <div className={classes.Projectlist}>
            <h2 className={classes.TaskTypeTitle}>{props.typeSelected} Tasks</h2>
            {props.loading ? activitySkeleton : activitySum}
            {props.loading || animation ? skeleton :
                props.tasks[props.typeSelected].length === 0 ? emptyPlaceholder : tasksComponent}
        </div>
    );
};
const State = state => {
    return {
        tasks: state.tasksReducer.tasks,
        loading: state.tasksReducer.loading,
        typeSelected : state.tasksReducer.typeSelected
    }
}

export default connect(State)(Projectlist);