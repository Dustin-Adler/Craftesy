import { CURRENT_SEARCH, CLEAR_SEARCH, RECEIVE_SEARCHED_PRODUCT_IDS } from '../actions/search_actions';

const searchReducer = (state = {searchString: "", productIds: []}, action) => {
    switch (action.type) {
        case CURRENT_SEARCH:
            return {...state, searchString: action.search};
        case RECEIVE_SEARCHED_PRODUCT_IDS:
            return {...state, productIds: action.productIds};
        case CLEAR_SEARCH:
            return {searchString: "", productIds: []};
        default:
            return state;
    }
}

export default searchReducer;