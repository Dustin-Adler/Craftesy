import { RECEIVE_GUEST, REMOVE_GUEST } from "../actions/guest_actions";

const guestReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_GUEST:
            return {[action.guest.id]: action.guest }
        case REMOVE_GUEST:
            return {};
        default:
            return state;
    }
};

export default guestReducer;