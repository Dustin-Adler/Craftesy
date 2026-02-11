import { CURRENT_SEARCH, CLEAR_SEARCH, RECEIVE_SEARCHED_PRODUCT_IDS } from '../actions/search_actions';
import { RECEIVE_MATCHED_SEARCH } from '../actions/product_actions';

const searchReducer = (state = {searchString: "", searchAssist: [], productIds: []}, action) => {
    switch (action.type) {
        case CURRENT_SEARCH:
            return {...state, searchString: action.search};
        case RECEIVE_SEARCHED_PRODUCT_IDS:
            return {...state, productIds: action.productIds};
        case RECEIVE_MATCHED_SEARCH:
            return {...state, searchAssist: action.matched_terms};
        case CLEAR_SEARCH:
            return {searchString: "", searchAssist: [], productIds: []};
        default:
            return state;
    }
}

export default searchReducer;