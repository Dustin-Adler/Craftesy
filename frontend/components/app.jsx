import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RegistrationContainer from './user/user_register_form_container';

const App = () => (
  <div>
    <header>
      <h1>Craftesy</h1>
      {/* <NavBar /> */}
      <Route path='/' component={RegistrationContainer} />
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