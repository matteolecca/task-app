import React from 'react';
import Slider from '../../components/Slider/Slider';
import Priorityproject from './Priorityproject/Priorityproject';
import EmptyTaskPlaceholder from '../../components/EmptyTaskPlaceholder/EmptyTaskPlaceholder';
import { getCompletionPercentage } from '../../helper/taskCompletionPercentage'
import { connect } from 'react-redux';
import SingleTaskSkeleton from '../../components/LoadingSkeleton/SingleTaskSkeleton';

const ActiveTasks = props => {
    const {loading, tasks} = props
    if (loading) return <SingleTaskSkeleton />
    if (tasks.length === 0) return <EmptyTaskPlaceholder type="active" />

    return (
        <Slider>
            {tasks.map(p => {
                const percentage = parseInt(getCompletionPercentage(p))
                return (
                    <Priorityproject
                        key={p.ID}
                        title={p.text}
                        progress={percentage}
                        color={p.color}
                        date={new Date(p.start_date).toDateString()}
                    />
                )
            })}
        </Slider>
    );
};
const State = state => {
     return {
        tasks: state.tasksReducer.tasks.active,
        loading: state.tasksReducer.loading
    }
}

export default connect(State)(ActiveTasks);