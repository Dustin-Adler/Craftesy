import {
    RECEIVE_CART_ITEMS, 
    RECEIVE_CART_ITEM, 
    REMOVE_CART_ITEM
} from '../actions/cart_actions'

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems

        case RECEIVE_CART_ITEM:
            return {...state, [action.cartItem.id]: action.cartItem}

        case REMOVE_CART_ITEM:
            const newState = {...state}
            delete newState[action.id]
            return newState
            
        default:
            return state;
    }
}

export default cartReducer;