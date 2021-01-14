import { takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions'
import { checkAuth, login, logout } from './auth-saga';
import {deleteTask, loadTasks, createTask, completeTask, editTask} from './tasks-saga'

export function* taskListener() {
    yield all([
        takeEvery(actions.LOAD_TASKS, loadTasks),
        takeEvery(actions.DELETE_TASK, deleteTask),
        takeEvery(actions.CREATE_TASK, createTask),
        takeEvery(actions.COMPLETE_TASK, completeTask),
        takeEvery(actions.EDIT_TASK, editTask),
        takeEvery(actions.CHECK_AUTH, checkAuth),
        takeEvery(actions.LOGOUT, logout),
        takeEvery(actions.LOGIN, login),
    ])
}