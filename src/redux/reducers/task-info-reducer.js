import * as actions from '../actions'
const initialState = {
    task : {}
}


export default function tasks(state = initialState, action) {
    switch (action.type) {
        case actions.TASK_SELECTED:
            return { task : action.task }
        default:
            return state
    }
}