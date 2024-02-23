import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import productReducer from './products_reducer';
import reviewReducer from './reviews_reducer';
import cartReducer from './cart_reducer';
import imagesReducer from './images_reducer';

const entitiesReducer = combineReducers({
    users: userReducer,
    products: productReducer,
    reviews: reviewReducer,
    cart: cartReducer,
    images: imagesReducer
})

export default entitiesReducer;