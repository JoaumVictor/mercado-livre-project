import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home';
// import Carrinho from './pages/Carrinho';
// import Produto from './pages/Produto';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        {/* <Route
          exact
          path="/carrinho"
          render={ (props) => <Carrinho { ...props } /> }
        />
        <Route
          exact
          path="/produto/:id"
          render={ (props) => <Produto { ...props } /> }
        /> */}
      </Switch>
    </BrowserRouter>
  );
}
