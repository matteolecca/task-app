import * as actions from '../actions'
import * as context from '../context'
const initialState = {
    context : context.ACTIVE_TASKS_LIST
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_CONTEXT:
            return { context : action.context }
        default:
            return state
    }
}

export default reducer