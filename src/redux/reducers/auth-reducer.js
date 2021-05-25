import * as actions from '../actions'
const initialState = {
    logged: false,
    checking: false,
    logging: false,
    updating: false,
    errorMessage: '',
    user: {}
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
            return { ...state, logged: true, checking: false, logging: false, user: action.user }
        case actions.LOGGING_IN:
            console.log("LOGGED IN")
            return { ...state, logging: true, errorMessage : '' }
        case actions.ERROR_AUTH:
            return { ...state, logging: false, errorMessage: action.message }
        case actions.UPDATING_USER:
            return { ...state, updating: true }
        case actions.USER_UPDATED:
            const user = {...state.user}
            if(action.valueType === 'hoursperday')user.hoursperday = parseInt(action.value)
            return { ...state, updating: false, user : user }
        default:
            return state
    }
}