import { useCallback, useReducer } from 'react'
import { axiosFetch } from '../HTTP/http'
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHING':
            return { ...state, loading: true, error: null, checkingAuth: true, }
        case 'SUCCESS':
            return { ...state, success: action.success, loading: false, checkingAuth: false, error: null, auth: true }
        case 'ERROR':
            return { ...state, error: action.error, loading: false, checkingAuth: false, auth: false }
        case 'LOGOUT':
            return { ...state, auth:false }
        default:
            return state
    }
}

const LoginHook = () => {
    const [result, dispatch] = useReducer(reducer, { checkingAuth: true, auth: false })

    const login = useCallback(async (user) => {
        dispatch({ type: 'FETCHING' })
        console.log("Logging in...")
        const result = await axiosFetch('/login', 'POST', { email: user.email, password: user.password })
        if (result.data.error) dispatch({ type: 'ERROR', error: "Error loading" })
        else {
            localStorage.setItem('token', result.data.token)
            dispatch({ type: 'SUCCESS', success: result.data })
        }
    }, [])

    const logout = useCallback(async (user) => {
        console.log("LOGGING OUT...")
        dispatch({ type: 'FETCHING'})
        setTimeout(() => {
            localStorage.removeItem('token')
            dispatch({ type: 'LOGOUT'})
        }, 1500);
    }, [])

    const checkAuth = useCallback(async () => {
        console.log("Checking auth...")
        dispatch({ type: 'FETCHING' })
        const token = localStorage.getItem('token')
        if (!token) dispatch({ type: 'ERROR' })
        else {
            const result = await axiosFetch(`/user/${token}`, 'GET')
            console.log("RESULT", result)
            if (result.error) dispatch({ type: 'ERROR', error: result.error })
            if (!result.data.logged) dispatch({ type: 'ERROR', error: result.error })
            else dispatch({ type: 'SUCCESS', success: result.data.user })
        }
    }, [])

    return {
        login: login,
        checkauth: checkAuth,
        logout: logout,
        result: result,
        loading: result.loading,
        checkingAuth: result.checkingAuth,
        auth: result.auth
    }
}
export default LoginHook