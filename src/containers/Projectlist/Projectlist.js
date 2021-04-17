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
    const {tasks, typeSelected, loading} = props
    useEffect(()=>{
        setAnimation(true)
        setTimeout(() => {
            setAnimation(false)            
        }, 1000);
    }, [typeSelected])

    const emptyPlaceholder = <EmptyTaskPlaceholder />
    const activitySum = <Activitysummary type={typeSelected} tasks={tasks} />
    const tasksComponent =
        <div className={classes.ListContainer}>
            {tasks[typeSelected].map(project => {
                return <Listitem setTask={props.setTask} edit={props.edit} project={project} key={project.ID} />
            })}
        </div>

    const skeleton = <ListSkeleton count={tasks[typeSelected].length} />
    const activitySkeleton = <ColumnsSkeleton />

    return (
        <div className={classes.Projectlist}>
            <h2 className={classes.TaskTypeTitle}>{typeSelected} Tasks</h2>
            {loading ? activitySkeleton : activitySum}
            {loading || animation ? skeleton :
                tasks[typeSelected].length === 0 ? emptyPlaceholder : tasksComponent}
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