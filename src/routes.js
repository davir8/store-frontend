import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/main';
import ProductDetail from './pages/productDetail';
import ProductCreate from './pages/productCreate';
import Login from './pages/login/index';

import { isAuthenticated } from './services/auth';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => (isAuthenticated() ? <Main /> : <Redirect to="/login" />)} />
    <Route exact path="/login" render={() => (isAuthenticated() ? <Redirect to="/" /> : <Login />)} />
    <Route
      exact
      path="/products/create"
      render={props => (isAuthenticated() ? <ProductCreate {...props} /> : <Redirect to="/login" />)}
    />
    <Route
      exact
      path="/products/:id"
      render={props => (isAuthenticated() ? <ProductDetail {...props} /> : <Redirect to="/login" />)}
    />
    <Route path="*" render={() => <h1>Página não encontrada! :(</h1>} />
  </Switch>
);

export default Routes;
