import React, { useState, useEffect, useCallback } from 'react';
import Logoutview from '../../components/Logout/Logoutview';
import Completedstats from '../CompletedStats/CompletedStats';
import Projectlist from '../Projectlist/Projectlist';
import classes from './Main.module.css'
import Sidedrawer from '../sidedrawer/Sidedrawer';
import Newtask from '../Newtask/Newtask';
import ActiveTasks from '../ActiveTasks/ActiveTasks';
import ActiveTasksList from '../ActiveTasksList/ActiveTasksList';
import DailyRoutine from '../Dailyroutine/DailyRoutine';
import { connect } from 'react-redux';
import * as context from '../../redux/context'
import TasksTypesList from '../TasksTypesList/TasksTypesList';
import FloatingButton from '../../UI/FloatingButton/FloatingButton';
import TaskOverview from '../TaskOverview/TaskOverview';
import SwitchButton from '../../components/SwitchButton/SwitchButtonsContainer';
import logo from '../../images/app-logo.png'
import logoDark from '../../images/app-logo-dark.png'
const Main = props => {
    const [modalTaskOpened, openModalTask] = useState(false)
    const [taskInfoOpen, openTaskInfo] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState(null)
    const { menuOpened, openMenu, loadTasks, style } = props
    
    useEffect(() => {
            loadTasks()
    }, [loadTasks, ])

    useEffect(() => {
        if (modalTaskOpened) { document.body.style.overflow = "hidden" }
        else { document.body.style.overflow = "scroll" }
    }, [modalTaskOpened])

    const sideOpenHandler = () => {
        openMenu(!menuOpened)
    }

    const closeMenu = () => {
        openMenu(false)
        openModalTask(false)
    }

    const modalHandler = () => {
         openModalTask(!modalTaskOpened)
    }
    const setTaskToEditHandler = (useCallback(task =>{
        setTaskToEdit(task)
    },[]))

    const slideRight = menuOpened ? classes.slideright : null

    const dailyroutine = () => {
        const visible = props.context === context.ACTIVE_TASKS ? classes.visible : classes.hidden
        return (<div className={[classes.doubleItemContainer, classes.Dailyroutine, visible].join(' ')}>
            <h2 className={classes.sectiontitle}>Daily Routine</h2>
            <div className={classes.item}>
                <DailyRoutine />
            </div>
        </div>)
    }

    const activetaskslist = () => {
        const visible = props.context === context.ACTIVE_TASKS_LIST ? classes.visible : classes.hidden
        return (
            <div className={[classes.item, classes.projectlist, classes.nopadbtm, classes.display, visible].join(' ')}>
                <ActiveTasksList openInfo={openTaskInfo} modalHandler={modalHandler} />
            </div>)
    }

    const activetasks = () => {
        const visible = props.context === context.ACTIVE_TASKS ? classes.visible : classes.hidden
        return (
            <div className={[classes.doubleItemContainer, classes.ActiveTask, visible].join(' ')}>
                <h2 className={classes.sectiontitle}>Active Projects</h2>
                <div className={[classes.item, classes.lowpad].join(' ')}>
                    <ActiveTasks />
                </div>
            </div>)
    }

    const taskslist = () => {
        const visible = props.context === context.TASKS_LIST ? classes.visible : classes.hidden
        return (
            <div className={[classes.TaskOverview, classes.nopadbtm, classes.doubleItemContainer, visible].join(' ')}>
                <div className={[classes.item, classes.scroll].join(' ')}>
                    <Projectlist setTask={setTaskToEditHandler} edit={modalHandler}/>
                </div>
                <div className={classes.hidden}>
                    <Logoutview />
                </div>
            </div>)
    }

    const completedstats = () => {
        const visible = props.context === 'completedstats' ? classes.visible : classes.hidden
        return (
            <div className={[classes.doubleItemContainer, visible, classes.TaskCompletion].join(' ')}>
                <h2 className={classes.sectiontitle}>Tasks Completion</h2>
                <div className={[classes.item].join(' ')}>
                    <Completedstats />
                </div>
            </div>)
    }

    const tasksTypesList = () => {
        const visible = props.context === context.TASKS_LIST ? classes.visible : classes.hidden
        return (
            <div className={[classes.item, classes.TaskTypeList, visible].join(' ')}>
                <TasksTypesList />
            </div>
        )
    }



    return (
        <React.Fragment>
            <div className={[classes.Container, slideRight].join(' ')}>
                {tasksTypesList()}
                {dailyroutine()}
                {activetaskslist()}
                {activetasks()}
                {taskslist()}
                {completedstats()}
                <div className={[classes.buttonContainer, classes.hidden].join(' ')}>
                    <SwitchButton handleLight={props.handleLight} />
                </div>
            </div>
            <TaskOverview setTask={setTaskToEditHandler} edit={modalHandler} opened={taskInfoOpen} close={openTaskInfo} />
            <Sidedrawer logo={style === 'light' ? logo : logoDark} close={closeMenu} clicked={sideOpenHandler} opened={props.menuOpened} />
            <Newtask resetTask={setTaskToEditHandler} task={taskToEdit} close={closeMenu} opened={modalTaskOpened} />
            <FloatingButton onclick={modalHandler}/>
        </React.Fragment>
    );
};


const Actions = dispatch => {
    return {
        loadTasks: () => dispatch({ type: 'LOAD_TASKS' })
    }
}
const State = state => {
    return {
        context: state.contextReducer.context,
        style: state.appearenceReducer.style
    }
}
export default connect(State, Actions)(Main);