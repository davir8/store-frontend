import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/main';
import ProductDetail from './pages/productDetail';
import ProductCreate from './pages/productCreate';
import Login from './pages/auth/login/index';

import { isLogaded } from './helpers/auth';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => (isLogaded() ? <Main /> : <Redirect to="/login" />)} />
    <Route exact path="/login" render={() => (isLogaded() ? <Redirect to="/" /> : <Login />)} />
    <Route
      exact
      path="/products/create"
      render={props => (isLogaded() ? <ProductCreate {...props} /> : <Redirect to="/login" />)}
    />
    <Route
      exact
      path="/products/:id"
      render={props => (isLogaded() ? <ProductDetail {...props} /> : <Redirect to="/login" />)}
    />
    <Route path="*" render={() => <h1>Página não encontrada! :(</h1>} />
  </Switch>
);

export default Routes;
