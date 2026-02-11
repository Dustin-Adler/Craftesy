import * as ProductApiUtil from '../utils/products_api_util'
import { searchedProductIds } from './search_actions'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const RECEIVE_MATCHED_SEARCH = 'RECEIVE_MATCHED_SEARCH'

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
})

const receiveSearchAssist = (matched_terms) => ({
    type: RECEIVE_MATCHED_SEARCH,
    matched_terms
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

export const searchAssist = (search_string) => (dispatch) => (
    ProductApiUtil.searchAssist(search_string)
    .then(
        response => dispatch(receiveSearchAssist(response.matched_terms))
    )
)

export const autoSearchByProductAssociation = (search_string) => (dispatch) => (
    ProductApiUtil.searchByProductName(search_string)
    .then(
        response => dispatch(receiveProducts(response.products))
    )
)

export const searchByProductName = (search_string) => (dispatch) => (
    ProductApiUtil.searchByProductName(search_string)
    .then(
        response => {
            dispatch(receiveProducts(response.products)),
            dispatch(searchedProductIds(response.ui.product_ids))
        }
    )
)