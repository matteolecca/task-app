import React, { useEffect, useState } from 'react';
import classes from './CompletedStats.module.css'
import { connect } from 'react-redux';
import Stat from './Stat';
import ListSkeleton from '../../components/LoadingSkeleton/ListSkeleton';

const CompletedStats = props => {

    const[completed, setCompleted] = useState(0)
    const[uncompleted, setUncompleted] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(()=>{
        if(props.completed){
            setCompleted(props.completed.length)
            setUncompleted(props.uncompleted.length)
            setPercentage((completed / (completed + uncompleted) * 100))
        }
        
    },[props.completed, props.uncompleted, completed, uncompleted])

    return (
        <div className={classes.CompletedStats}>
            {props.loading ?
                <ListSkeleton height="45%" count={2}/>
                :
                <React.Fragment>
                    <Stat status="Completed" completed  count={completed} percentage={percentage}/>
                    <Stat status="Uncompleted" count={uncompleted} percentage={100 - percentage} />
                </React.Fragment>
            }
        </div>
    );
};

const State = state => {
    return {
        loading: state.tasksReducer.loading,
        completed: state.tasksReducer.tasks.completed,
        uncompleted: state.tasksReducer.tasks.uncompleted,
    }
}
export default connect(State)(CompletedStats);