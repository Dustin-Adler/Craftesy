import {RECEIVE_ALL_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS} from '../actions/session_actions'

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;