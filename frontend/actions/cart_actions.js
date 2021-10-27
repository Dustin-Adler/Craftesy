import * as CartAPIUtil from '../utils/carts_api_util'

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    id,
})

export const getCartItems = () => (dispatch) => (
    CartAPIUtil.getCart()
    .then(recCartItems => dispatch(receiveCartItems(recCartItems)))
)

export const createCartItem = (cart) => (dispatch) => (
    CartAPIUtil.createCartItem(cart)
    .then(recCartItems => dispatch(receiveCartItems(recCartItems)))
)

export const deleteCartItem = (id) => (dispatch) => (
    CartAPIUtil.deleteCartItem(id)
    .then(() => dispatch(removeCartItem(id)))
)