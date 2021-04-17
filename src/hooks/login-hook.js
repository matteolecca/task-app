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
    
    return {
        valid : true
    }
}
export default LoginHook