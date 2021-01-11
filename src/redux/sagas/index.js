import { takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions'
import {deleteTask, loadTasks, createTask, completeTask} from './tasks-saga'

export function* taskListener() {
    yield all([
        takeEvery(actions.LOAD_TASKS, loadTasks),
        takeEvery(actions.DELETE_TASK, deleteTask),
        takeEvery(actions.CREATE_TASK, createTask),
        takeEvery(actions.COMPLETE_TASK, completeTask),
    ])
}