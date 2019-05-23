import React from 'react';
import { func, shape } from 'prop-types';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Container } from './styles';

const authToken = localStorage.getItem(process.env.AUTH_ID_TOKEN);

const Header = props => (
  <Container>
    React JS
    {authToken ? (
      <button
        type="button"
        className="ml1 pointer black"
        onClick={() => {
          localStorage.removeItem(process.env.AUTH_ID_TOKEN);
          props.history.push('/');
        }}
      >
        logout
      </button>
    ) : (
      <Link to="/login" className="ml1 no-underline black">
        login
      </Link>
    )}
  </Container>
);

Header.propTypes = {
  history: shape({
    push: func,
  }).isRequired,
};

export default withRouter(Header);
