import { RECEIVE_USER, REMOVE_USER, RECEIVE_EMAIL } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions"

const userReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return {[action.user.id]: action.user}
        case RECEIVE_EMAIL:
            return {[action.user.id]: action.user}
        case REMOVE_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default userReducer;