import React from 'react';
import { string, node } from 'prop-types';

import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/main';
import ProductDetail from './pages/productDetail';
import ProductCreate from './pages/productCreate';
import Login from './pages/login/index';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    ))
    }
  />
);
PrivateRoute.propTypes = {
  component: node.isRequired,
  location: string.isRequired,
};

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Main} />
    <Route path="/login" render={() => (isAuthenticated() ? <Redirect to="/" /> : <Login />)} />
    <PrivateRoute path="/products/create" component={ProductCreate} />
    <PrivateRoute path="/products/:id" component={ProductDetail} />
    <Route path="*" render={() => <h1>Página não encontrada! :(</h1>} />
  </Switch>
);

export default Routes;
