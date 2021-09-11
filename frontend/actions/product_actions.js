import * as ProductApiUtil from '../utils/products_api_util'
export const RECEIVE_PRODUCTS = 'RECEIVE_ALL_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product,
})

const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id,
})

export const getProducts = () => (dispatch) => (
    ProductApiUtil.getProducts()
    .then(recProducts => dispatch(receiveProducts(recProducts)))
)

export const getProduct = (id) => (dispatch) => (
    ProductApiUtil.getProduct(id)
    .then(
        recProduct => dispatch(receiveProduct(recProduct))    
    )
)

export const createProduct = (product) => (dispatch) => (
    ProductApiUtil.createProduct(product)
    .then(
        recProduct => dispatch(receiveProduct(recProduct))
    )
)

export const updateProduct = (product) => (dispatch) => (
    ProductApiUtil.updateProduct(product)
    .then(
        recProduct => dispatch(receiveProduct(recProduct))
    )
)

export const deleteProduct = (id) => (dispatch) => (
    ProductApiUtil.deleteProduct(id)
    .then(
        () => dispatch(removeProduct(id))
    )
)