import * as actions from '../actions'

const initialState = {
    style : 'light'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_APPEARENCE:
            return { style : action.style}
        default:
           return state
    }
}

export default reducer