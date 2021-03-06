import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'
import { axiosFetch, axiosFetchAll } from '../../HTTP/http'

export function* loadTasks(action) {
    console.log('SAGA LOAD TASK')
    const token = yield call([localStorage, 'getItem'], 'token')
    yield put({ type: actions.LOADING_TASKS })
    const tasks = yield axiosFetchAll(token )
    if(tasks.error) yield put({type:actions.LOGGED_OUT})
    else{yield put({
        type: actions.TASKS_LOADED, tasks: {
            active: tasks[0].data,
            passed: tasks[1].data,
            scheduled: tasks[2].data,
            completed : tasks[3].data,
            uncompleted : tasks[4].data,
        }
    })}
}

export function* deleteTask(action) {
    console.log('SAGA DELETE TASK')
    const token = yield call([localStorage, 'getItem'], 'token')
    yield put({ type: actions.LOADING_TASKS })
    const response = yield axiosFetch(`/deleteTask/${token}/${action.taskID}`, 'POST')
    if (response.error) yield put({type:actions.LOGGED_OUT})
    yield put({ type: actions.SUCCESS, message : 'Task deleted!' })
    const tasks = yield axiosFetchAll(token)
    yield put({
        type: actions.TASKS_LOADED, tasks: {
            active: tasks[0].data,
            passed: tasks[1].data,
            scheduled: tasks[2].data,
        }
    })
}

export function* createTask(action) {
    console.log('SAGA ADD TASK')
    const token = yield call([localStorage, 'getItem'], 'token')
    yield put({ type: actions.LOADING_TASKS })
    const result = yield axiosFetch(`/task/${token}`, 'POST', action.task)
    if (result.error) yield put({type:actions.LOGGED_OUT})
    else {
        yield put({ type: actions.SUCCESS, message : 'Task inserted!' })
        const tasks = yield axiosFetchAll(token)
        yield put({
            type: actions.TASKS_LOADED, tasks: {
                active: tasks[0].data,
                passed: tasks[1].data,
                scheduled: tasks[2].data
            }
        })
    }
}



export function* completeTask(action) {
    console.log('SAGA SET COMPLETED TASK')
    const token = yield call([localStorage, 'getItem'], 'token')
    yield put({ type: actions.LOADING_TASKS })
    const result = yield axiosFetch(`/completetask/${token}/${action.taskID}`, 'POST', action.task)
    if (result.error) console.log('Error')
    else {
        yield put({ type: actions.SUCCESS, message : 'Task completed!' })
        const tasks = yield axiosFetchAll(token)
        yield put({
            type: actions.TASKS_LOADED, tasks: {
                active: tasks[0].data,
                passed: tasks[1].data,
                scheduled: tasks[2].data
            }
        })
    }
}


export function* editTask(action) {
    console.log('SAGA EDIT TASK')
    const token = yield call([localStorage, 'getItem'], 'token')
    yield put({ type: actions.LOADING_TASKS })
    const result = yield axiosFetch(`/edit/${token}`, 'POST', action.task)
    if (result.error) console.log('Error')
    else yield put({type: actions.RELOAD_TASKS, token : token, message : 'Task Updated'})
}

export function* reloadTasks(action){
    yield put({ type: actions.SUCCESS, message : action.message })
        const tasks = yield axiosFetchAll(action.token)
        yield put({
            type: actions.TASKS_LOADED, tasks: {
                active: tasks[0].data,
                passed: tasks[1].data,
                scheduled: tasks[2].data
            }
        })
}
