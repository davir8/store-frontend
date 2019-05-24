import React, { Component } from 'react';
import { shape, func } from 'prop-types';

import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { LOGIN, SIGNUP } from '../../../services/mutations/user';
import { saveUserData } from '../../../helpers/auth';
import { Container } from './styles';

class Login extends Component {
  static propTypes = {
    history: shape({
      push: func,
    }).isRequired,
  };

  state = {
    login: true, // switch between Login and SignUp
    loading: false,
    email: '',
    password: '',
    name: '',
    error: '',
  };

  confirm = (data) => {
    const authData = this.state.login ? data.login : data.signup;

    saveUserData(authData);
    this.props.history.push('/');
  };

  handleSubmit = async (e, mutation) => {
    e.preventDefault();
    const {
      email, password, name, login, loading,
    } = this.state;

    if (!email && !password) return;
    if (!name && !login) return;

    if (loading) return;

    try {
      this.setState({ loading: true });
      await mutation({ variables: { email, password, name } });
    } catch (error) {
      this.setState({ error: 'Email ou senha incorretos!' });
    }

    this.setState({
      password: '',
      loading: false,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      login, email, password, name, error, loading,
    } = this.state;
    return (
      <Container>
        <form onSubmit={this.handleSubmit} method="post">
          <span className="title">{login ? 'Entrar' : 'Criar Conta'}</span>
          {!!error && <span className="error">{error}</span>}
          {loading && <span>Carregando...</span>}
          <div className="input-group">
            {!login && (
              <label htmlFor="name">
                Nome
                <input
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Digite seu nome"
                />
              </label>
            )}
            <label htmlFor="email">
              Email
              <input
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange}
                type="email"
                placeholder="Digite seu email"
              />
            </label>
            <label htmlFor="password">
              Senha
              <input
                name="password"
                id="password"
                value={password}
                onChange={this.handleChange}
                type="password"
                placeholder="Digite sua senha"
              />
            </label>
            <Mutation mutation={login ? LOGIN : SIGNUP} onCompleted={data => this.confirm(data)}>
              {mutation => (
                <button type="submit" onClick={e => this.handleSubmit(e, mutation)}>
                  {login ? 'Entrar' : 'Criar'}
                </button>
              )}
            </Mutation>
            <button
              className="secundary"
              type="button"
              onClick={() => this.setState({ login: !login, error: '', password: '' })}
            >
              {login ? 'Criar Conta' : 'Voltar ao login'}
            </button>
          </div>
        </form>
      </Container>
    );
  }
}

export default withRouter(Login);
