import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import Header from './header/header';
import Modal from './modal/modal';
import HeaderContainer from './header/header_container';

const App = () => (
  <div>
    <Modal/>
    <header>
      <Route path='/' component={HeaderContainer} />
    </header>
    {/* <main>
        <ProductIndex/>
    </main>
    <footer>
        <FooterLinks/>
    </footer> */}
  </div>
);

export default App;