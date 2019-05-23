import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import Login from './pages/auth/login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route path="/products/:id" component={Product} />
  </Switch>
);

export default Routes;
