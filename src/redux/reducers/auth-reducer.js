import * as actions from '../actions'
const initialState = {
    logged: false,
    checking: false,
    logging: false,
    errorMessage : ''
}


export default function tasks(state = initialState, action) {
    switch (action.type) {
        case actions.CHECKING_AUTH:
            return { ...state, checking: true }
        case actions.LOGGED_OUT:
            console.log("LOGGED_OUT")
            return { ...state, logged: false, checking: false }
        case actions.LOGGED_IN:
            console.log("LOGGED IN")
            return { ...state, logged: true, checking: false, logging: false }
        case actions.LOGGING_IN:
            console.log("LOGGED IN")
            return { ...state, logging : true }
        case actions.ERROR_AUTH:
            return {logging : false, errorMessage : action.message}
        default:
            return state
    }
}