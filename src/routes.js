import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Login from './pages/auth/login/index';

import { isLogaded } from './helpers/auth';

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => (isLogaded() ? <Main /> : <Redirect to="/login" />)} />
    <Route exact path="/login" render={() => (isLogaded() ? <Redirect to="/" /> : <Login />)} />
    <Route exact path="/products/:id" component={Product} />
  </Switch>
);

export default Routes;
