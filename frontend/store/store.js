import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "../reducers/root_reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => 
  legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;