import * as actions from '../actions'
const initialState = {
    loading: false,
    animation: false,
    tasks: {
        active: [],
        passed: [],
        scheduled: [],
        completed: [],
        uncompleted: [],
    },
    typeSelected: 'active'
}


export default function tasks(state = initialState, action) {
    switch (action.type) {
        case actions.LOADING_TASKS:
            console.log("LOADING TASKS...")
            return { ...state, loading: true }
        case actions.TASKS_LOADED:
            console.log("TASKS LOADED")
            return { ...state, tasks: action.tasks, loading: false }
        case actions.SELECT_TASK_TYPE:
            console.log("TASKS TYPE SELECTED")
            return { ...state, typeSelected: action.tasktype, animating : false }
        case actions.ANIMATING_TASK_TYPE:
            console.log("TASKS TYPE SELECTED")
            return { ...state, animating : true }
        default:
            return state
    }
}