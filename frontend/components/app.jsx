import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import ReviewModal from './modal/review_modal';
import HeaderContainer from './header/header_container';
import ProductIndexContainer from './products/product_index_container'
import Footer from './footer/footer'
import AboutCraftesy from './about/what_is_craftesy';
import GameBubblesContainer from './products/game_bubbles_container';
import ProductIndexItemContainer from './products/product_index_item_container';
import CartContainer from './cart/cart_container'
import ProductSearchIndexContainer from './products/product_search_index_container'
import ScrollingProductsContainer from './products/scrolling_products_container'

const App = () => (
  <div className='master-layout'>
    <Modal/>
    <header>
      <Route path='/' component={HeaderContainer} />
    </header>
    <main>
      <Route exact path='/' component={GameBubblesContainer} />
      <Route exact path='/' component={ScrollingProductsContainer} />
      <Route exact path='/products/search' component={GameBubblesContainer} />
      <Switch>
        <Route path='/products/search' component={ProductSearchIndexContainer} />
        <Route path='/products/:id' component={ProductIndexItemContainer} />
      </Switch>
      <Route exact path='/products/:id' component={ReviewModal}/>
      <Route path='/products/:id/reviews/:reviewId' component={ReviewModal}/>
      <Route path='/cart' component={CartContainer}/>
      <Route exact path='/' component={ProductIndexContainer} />
      <Route exact path='/' component={AboutCraftesy} />
    </main>
    <footer>
      <Route path='/' component={Footer} />
    </footer>
  </div>
);

export default App;