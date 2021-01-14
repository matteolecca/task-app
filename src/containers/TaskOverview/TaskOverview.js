import React from 'react';
import { connect } from 'react-redux';
import Transition from '../../components/Transition/transition';
import Backdrop from '../../UI/Backdrop/Backdrop';
import TaskInfo from './TaskInfo';
import classes from './TaskOverview.module.css'
import StartDateIcon from '@material-ui/icons/DateRange';
import EndDateIcon from '@material-ui/icons/EventBusy';
import TimeIcon from '@material-ui/icons/QueryBuilder';
import PriorityIcon from '@material-ui/icons/Warning';
import CircleIcon from '@material-ui/icons/FiberManualRecord';
import Priorityproject from '../ActiveTasks/Priorityproject/Priorityproject';
import { getCompletionPercentage } from '../../helper/taskCompletionPercentage'

const TaskOverview = props => {
    const startDate = new Date(props.task.start_date).toDateString()
    const endDate = new Date(props.task.end_date).toDateString()
    console.log(props.task)
    const opened = props.opened ? classes.opened : classes.closed
    return (
        <React.Fragment>
            <Transition transition={props.opened}>
                <div className={[classes.TaskOverview, opened].join(' ')}>
                    <div style={{backgroundColor:props.task.color}} className={classes.percentageContainer}>
                        <Priorityproject
                            key={props.task.ID}
                            title="Completion Percentage"
                            progress={getCompletionPercentage(props.task)}
                            color="#333333"
                        />
                    </div>
                    <div className={classes.TaskInfoContainer}>
                        <TaskInfo >
                            <h1>{props.task.text}</h1>
                            <CircleIcon fontSize="large" style={{ color: props.task.color }} />
                            {/* <label>Start Date</label> */}
                        </TaskInfo>
                        <TaskInfo value={startDate}>
                            <StartDateIcon style={{ color: 'green' }} />
                            {/* <label>Start Date</label> */}
                        </TaskInfo>
                        <TaskInfo value={endDate}>
                            <EndDateIcon style={{ color: 'red' }} />
                            {/* <label>End Date</label> */}
                        </TaskInfo>
                        <TaskInfo value={props.task.hoursperday + ' HRS'}>
                            <TimeIcon style={{ color: 'blue' }} />
                            {/* <label>Hours per day</label> */}
                        </TaskInfo>
                        <TaskInfo value={"Priority " + props.task.priority}>
                            <PriorityIcon style={{ color: 'rgb(255, 200, 58)' }} />
                        </TaskInfo>
                    </div>
                </div>
            </Transition>
            <Backdrop opened={props.opened} clicked={() => props.close(false)} />
        </React.Fragment>

    );
};

const State = state => {
    return {
        task: state.taskInfoReducer.task
    }
}
export default connect(State)(TaskOverview);