import {
    RECEIVE_CART_ITEMS, 
    REMOVE_CART_ITEM
} from '../actions/cart_actions'

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems
        case REMOVE_CART_ITEM:
            const newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default cartReducer;