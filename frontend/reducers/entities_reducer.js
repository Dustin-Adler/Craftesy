import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import productReducer from './products_reducer';

const entitiesReducer = combineReducers({
    users: userReducer,
    products: productReducer
})

export default entitiesReducer;