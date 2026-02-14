export const CURRENT_SEARCH = 'CURRENT_SEARCH'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const CLEAR_SEARCH_ASSIST = 'CLEAR_SEARCH_ASSIST'
export const RECEIVE_SEARCHED_PRODUCT_IDS = 'RECEIVE_SEARCHED_PRODUCT_IDS'

export const clearSearch = () => ({
    type: CLEAR_SEARCH
})

export const clearSearchAssist = () => ({
    type: CLEAR_SEARCH_ASSIST
})

export const currentSearch = (search) => ({
    type: CURRENT_SEARCH,
    search
})

export const searchedProductIds = (productIds) => ({
    type: RECEIVE_SEARCHED_PRODUCT_IDS,
    productIds
})