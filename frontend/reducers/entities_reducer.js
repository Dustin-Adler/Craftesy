import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import productReducer from './products_reducer';
import reviewReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    users: userReducer,
    products: productReducer,
    reviews: reviewReducer
})

export default entitiesReducer;