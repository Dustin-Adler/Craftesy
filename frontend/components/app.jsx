import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import Header from './header/header';
import Modal from './modal/modal';
import HeaderContainer from './header/header_container';
import ProductIndexContainer from './products/product_index_container'

const App = () => (
  <div>
    <Modal/>
    <header>
      <Route path='/' component={HeaderContainer} />
    </header>
    <main>
      <Route path='/' component={ProductIndexContainer} />
    </main>
    {/* <footer>
        <FooterLinks/>
    </footer> */}
  </div>
);

export default App;