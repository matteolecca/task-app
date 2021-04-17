import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'
import { axiosFetch } from '../../HTTP/http'

export function* checkAuth() {
    console.log("Checking auth...")
    yield put({ type: actions.CHECKING_AUTH })
    const token = yield call([localStorage, 'getItem'], 'token')
    if (!token) yield put({ type: actions.LOGGED_OUT })
    else {
        const result = yield axiosFetch(`/user/${token}`, 'GET')
        if (result.error )yield put({ type: actions.ERROR, message : 'Network error' })
        else if (!result.data.logged) yield put({ type: actions.LOGGED_OUT })
        else yield put({ type: actions.LOGGED_IN, user: result.data.user })
    }
}

export function* login(action) {
    yield put({ type: actions.LOGGING_IN })
    console.log("Logging in...")
    const result = yield axiosFetch('/login', 'POST', { email: action.user.email, password: action.user.password })
    console.log(result.data)
    if (result.error) yield put({ type: actions.ERROR_AUTH, message: result.error })
    else {
        yield call([localStorage, 'setItem'], 'token', result.data.token)
        yield put({ type: actions.LOGGED_IN, user: result.data })
    }
}
export function* signup(action) {
    console.log("Signing up...")
    yield put({ type: actions.LOGGING_IN })
    const result = yield axiosFetch('/signup', 'POST', { name: action.user.name, email: action.user.email, password: action.user.password, hoursperday: action.user.hoursperday })
    if (result.error) yield put({ type: actions.ERROR_AUTH, message: result.error })
    else {
        yield call([localStorage, 'setItem'], 'token', result.data.token)
        yield put({ type: actions.LOGGED_IN, user: result.data })
    }
}
export function* updateUser(action) {
    console.log("Updating User...")
    const token = yield call([localStorage, 'getItem'], 'token')
    if (!token) yield put({ type: actions.LOGGED_OUT })
    yield put({ type: actions.UPDATING_USER })
    const result = yield axiosFetch(`/updateuser/${action.valueType}/${token}`, 'POST', { value: action.value })
    if (result.error) yield put({ type: actions.ERROR_AUTH, message: result.error })
    yield put({ type: actions.USER_UPDATED, value : action.value, valueType : action.valueType })
    yield put({ type: actions.SUCCESS, message: "Updated" })
}

export function* logout() {
    yield call([localStorage, 'removeItem'], 'token')
    yield put({ type: actions.LOGGED_OUT })
}