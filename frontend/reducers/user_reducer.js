import { RECEIVE_USER, REMOVE_USER, RECEIVE_EMAIL } from "../actions/user_actions";

const userReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return {...state, [action.user.id]: action.user}
        case RECEIVE_EMAIL:
            return {...state}
        case REMOVE_USER: 
            const newState = {...state}
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default userReducer;