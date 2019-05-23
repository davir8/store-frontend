import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { Mutation } from 'react-apollo';
import { LOGIN, SIGNUP } from '../../services/mutations/user';

class Login extends Component {
  static propTypes = {
    history: shape({
      push: func,
    }).isRequired,
  };

  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  };

  confirm = async (data) => {
    const { token } = this.state.login ? data.login : data.signup;
    this.saveUserData(token);
    this.props.history.push('/');
  };

  saveUserData = (token) => {
    localStorage.setItem(process.env.AUTH_ID_TOKEN, token);
  };

  render() {
    const {
      login, email, password, name,
    } = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <Mutation
            mutation={login ? LOGIN : SIGNUP}
            variables={{ email, password, name }}
            onCompleted={data => this.confirm(data)}
          >
            {mutation => (
              <button type="button" className="pointer mr2 button" onClick={mutation}>
                {login ? 'login' : 'create account'}
              </button>
            )}
          </Mutation>
          <button
            type="button"
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? 'need to create an account?' : 'already have an account?'}
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
