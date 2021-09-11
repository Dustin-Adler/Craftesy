import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT} from '../actions/product_actions'


const productReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            return {...state, [action.product.id]: action.product}
        case REMOVE_PRODUCT:
            const newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default productReducer