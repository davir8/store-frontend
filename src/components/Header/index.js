import React from 'react';
import { func, shape } from 'prop-types';

import { withRouter } from 'react-router';
import { isAuthenticated, logout, getUser } from '../../services/auth';

import { Container } from './styles';

const Header = props => (
  <Container>
    <span>{isAuthenticated() ? getUser().name : ''}</span>
    <h1>React JS</h1>
    {isAuthenticated() ? (
      <button
        type="button"
        className="logout"
        onClick={() => {
          logout();
          props.history.push('/');
        }}
      >
        Sair
      </button>
    ) : (
      <span />
    )}
  </Container>
);

Header.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default withRouter(Header);
