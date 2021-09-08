import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from './session/sign_up_or_sign_in_container'
import Header from './header/header';

const App = () => (
  <div>
    <header>
      <h1>Craftesy</h1>
      {/* <NavBar /> */}
      <Route path='/' component={Header} />
      {/* <Route path='/' component={RegistrationContainer} />
      <Route path='/' component={LoginContainer} /> */}
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