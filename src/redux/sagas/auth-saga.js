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
        if (result.error) yield put({ type: actions.LOGGED_OUT })
        if (!result.data.logged) yield put({ type: actions.LOGGED_OUT })
        else yield put({ type: actions.LOGGED_IN, success: result.data.user })
    }
}

export function* login(action) {
    yield put({ type: actions.LOGGING_IN })
    console.log("Logging in...")
    const result = yield axiosFetch('/login', 'POST', { email: action.user.email, password: action.user.password })
    if (result.data.error) yield put({ type: actions.ERROR_AUTH, message : result.data.error })
    else {
        yield call([localStorage, 'setItem'], 'token', result.data.token)
        yield put({ type: actions.LOGGED_IN, success: result.data })
    }
}

export function* logout() {
    yield call([localStorage, 'removeItem'], 'token')
    yield put({ type: actions.LOGGED_OUT })
}