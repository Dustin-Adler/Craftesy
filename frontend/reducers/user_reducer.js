import { RECEIVE_USER, REMOVE_USER } from "../actions/user_actions";
import { RECEIVE_EMAIL}

const userReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return {...state, [action.user.id]: action.user}
        case REMOVE_USER: 
            const newState = {...state}
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default userReducer;