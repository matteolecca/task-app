import * as actions from '../actions'
const initialState = {
    loading: false,
    tasks: {
        active: [],
        passed: [],
        scheduled: [],
        completed : [],
        uncompleted : [],
    }
}


export default function tasks(state = initialState, action) {
    switch (action.type) {
        case actions.LOADING_TASKS:
            console.log("LOADING TASKS...")
            return { ...state, loading: true }
        case actions.TASKS_LOADED:
            console.log("TASKS LOADED")
            return { ...state, tasks: action.tasks, loading: false }
        default:
            return state
    }
}