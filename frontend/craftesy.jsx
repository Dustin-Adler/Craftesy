import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as UserActions from './actions/user_actions';
import * as SessionActions from './actions/session_actions';
import * as ProductActions from './actions/product_actions';
import * as ReviewActions from './actions/review_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: {
        id: window.currentUser.id,
      },
    };
  }

  store = configureStore(preloadedState)
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  window.store = store
  window.UserActions = UserActions
  window.SessionActions = SessionActions
  window.ProductActions = ProductActions 
  window.ReviewActions = ReviewActions
  
});