import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { loadState, saveState } from './store/localStorage';
import * as UserActions from './actions/user_actions';
import * as SessionActions from './actions/session_actions';
import * as ProductActions from './actions/product_actions';
import * as ReviewActions from './actions/review_actions';
import * as GuestActions from './actions/guest_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState = loadState();
  store = configureStore(preloadedState);
  let state = store.getState();
  store.subscribe(() => {
    saveState({
      entities: {
        cart: state.entities.cart,
        users: state.entities.users,
        guest: state.entities.guest,
        products: state.entities.products,
        reviews: state.entities.reviews,
        images: state.entities.images
      },
      errors: state.errors,
      session: state.session,
      ui: state.ui
    })
  });

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

  window.store = store
  window.UserActions = UserActions
  window.SessionActions = SessionActions
  window.ProductActions = ProductActions 
  window.ReviewActions = ReviewActions
  window.GuestActions = GuestActions
  
});
