import React from 'react';
import { func, shape } from 'prop-types';

import { withRouter } from 'react-router';
import { isLogaded, logout, getUser } from '../../helpers/auth';

import { Container } from './styles';

const Header = props => (
  <Container>
    <span>{isLogaded() ? getUser().name : ''}</span>
    <span>React JS</span>
    {isLogaded() ? (
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
