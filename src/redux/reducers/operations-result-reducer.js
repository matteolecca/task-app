import * as actions from '../actions'

const initialState = {
    success: false,
    error: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SUCCESS:
            return { success: true, error: false, message: action.message }
        case actions.ERROR:
            return { success: false, error: true, message: action.message }
        case actions.RESET_OPERATIONS:
            return initialState
        default:
            return state
    }
}

export default reducer