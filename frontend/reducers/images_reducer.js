import { RECEIVE_IMAGES } from "../actions/image_actions";

const imagesReducer = (state={}, action) => {
    switch(action.type) {
        case RECEIVE_IMAGES:
            return {...action.images}
        default:
            return state;
    }
}

export default imagesReducer