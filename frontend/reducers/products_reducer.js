import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT} from '../actions/product_actions'


const productReducer = (state = {}, action) => {
    let newState
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            newState = {...state, ...action.products}
            console.log(action, newState)
            return newState
        case RECEIVE_PRODUCT:
            return {...state, [action.product.id]: action.product}
        case REMOVE_PRODUCT:
            newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default productReducer