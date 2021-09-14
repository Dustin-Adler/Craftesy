import { 
    RECIEVE_PRODUCT_REVIEWS, 
    RECIEVE_REVIEW, 
    REMOVE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_PRODUCT_REVIEWS:
            return action.reviews
        case RECIEVE_REVIEW:
            return {...state, [action.review.id]: action.review}
        case REMOVE_REVIEW:
            const newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default reviewsReducer;