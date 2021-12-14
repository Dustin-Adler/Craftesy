import * as CartAPIUtil from '../utils/carts_api_util'

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

const receiveCartItem = (cartItem) => ({
    type:RECEIVE_CART_ITEM, 
    cartItem
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
    .then(recCartItem => dispatch(receiveCartItem(recCartItem)))
)

export const updateCartItem = (cart) => (dispatch) => (
    CartAPIUtil.updateCartItem(cart)
    .then(recCartItems => dispatch(receiveCartItem(recCartItems)))
)

export const deleteCartItem = (id) => (dispatch) => (
    CartAPIUtil.deleteCartItem(id)
    .then(() => dispatch(removeCartItem(id)))
)