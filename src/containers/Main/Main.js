import React, { useState, useEffect } from 'react';
import Logoutview from '../../components/Logout/Logoutview';
import Completedstats from '../CompletedStats/CompletedStats';
import Projectlist from '../Projectlist/Projectlist';
import classes from './Main.module.css'
import Topbar from '../../components/Topbar/Topbar';
import Sidedrawer from '../sidedrawer/Sidedrawer';
import Newtask from '../Newtask/Newtask';
import ActiveTasks from '../ActiveTasks/ActiveTasks';
import ActiveTasksList from '../ActiveTasksList/ActiveTasksList';
import DailyRoutine from '../Dailyroutine/DailyRoutine';
import { connect } from 'react-redux';
import Popup from '../../components/Popup/Popup';
import * as context from '../../redux/context'

const Main = props => {

    const [menuOpened, openMenu] = useState(false)
    const [modalTaskOpened, openModalTask] = useState(false)
    const [popup, openit] = useState(false)
    const loadTasks = props.loadTasks
    useEffect(() => {
        loadTasks()
        document.body.style.overflow = "auto"
    }, [loadTasks])

    const sideOpenHandler = () => {
        if (!menuOpened ) { document.body.style.overflow = "hidden" }
        else { document.body.style.overflow = "scroll" }
        openMenu(!menuOpened)
    }

    const openpopup = () => {
        console.log("opened")
        openit(!popup)
    }
    const closeMenu = () => {
        openMenu(false)
        openModalTask(false)
    }

    const modalHandler = () => {
      
        openModalTask(!modalTaskOpened)
    }

    const slideRight = menuOpened ? classes.slideright : null

    const dailyroutine = <div className={[classes.doubleItemContainer, classes.Dailyroutine].join(' ')}>
        <h2 className={classes.sectiontitle}>Daily Routine</h2>
        <div className={classes.item}>
            <DailyRoutine />
        </div>
    </div>

    const activetaskslist = () => {
        const visible = props.context === context.ACTIVE_TASKS_LIST ? classes.visible : classes.hidden
        return (
            <div className={[classes.item, classes.projectlist, classes.nopadbtm, classes.display,visible].join(' ')}>
                <ActiveTasksList modalHandler={modalHandler} />
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
            <div className={[classes.TaskOverview, classes.scroll, classes.nopadbtm, classes.doubleItemContainer, visible].join(' ')}>
                <div className={classes.item}>
                    <Projectlist />
                </div>
                <Logoutview logout={props.logout} />
            </div>)
    }

    const user = <div className={[classes.item, classes.UserInfo, classes.lowpad, classes.display].join(' ')}>
        <img alt="" src="icon.jpg" />
    </div>

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

    return (
        <React.Fragment>
            <Topbar clicked={sideOpenHandler} />
            <div onClick={() => openpopup(false)} className={[classes.Container, slideRight].join(' ')}>
                {user}
                {dailyroutine}
                {activetaskslist()}
                {activetasks()}
                {taskslist()}
                {completedstats()}
                
            </div>
            <Sidedrawer close={closeMenu} clicked={sideOpenHandler} opened={menuOpened} />
            <Newtask close={closeMenu} clicked={modalHandler} opened={modalTaskOpened} />
            <Popup />
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
        context: state.contextReducer.context
    }
}

export default connect(State, Actions)(Main);