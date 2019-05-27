import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Mutation } from 'react-apollo';
import { CREATE_PRODUCT } from '../../services/mutations/product';
import { GET_PRODUCTS } from '../../services/queries/product';

import { getUser } from '../../helpers/auth';

import { Container } from './styles';
import Header from '../../components/Header';

export default class ProductCreate extends Component {
  state = {
    name: '',
    description: '',
    url: '',
    loading: false,
    error: '',
  };

  handleSubmit = async (e, createProduct) => {
    e.preventDefault();

    const {
      name, description, url, loading,
    } = this.state;

    if (!name && !description) return;

    if (loading) return;

    const user = getUser();

    try {
      this.setState({ loading: true });
      await createProduct({
        variables: {
          name,
          description,
          url,
          userId: user.id,
        },
        // eslint-disable-next-line no-shadow
        update: (proxy, { data: { createProduct } }) => {
          const data = proxy.readQuery({
            query: GET_PRODUCTS,
          });

          data.users.push(createProduct);

          proxy.writeQuery({
            query: GET_PRODUCTS,
            data,
          });
        },
      });

      this.setState({
        name: '',
        description: '',
        url: '',
      });

      this.props.history.push('/');
    } catch (error) {
      this.setState({ error: 'Falha ao cadastrar o produto!' });
    }

    this.setState({
      name: '',
      description: '',
      url: '',
      loading: false,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      name, description, url, error, loading,
    } = this.state;
    return (
      <>
        <Header />
        <Container>
          <form onSubmit={this.handleSubmit} method="post">
            <div className="header">
              <Link to="/" className="back">
                <i className="fa fa-arrow-left" />
              </Link>
              <h1>Cadastrar novo produto</h1>
            </div>
            {!!error && <span className="error">{error}</span>}
            {loading && <span>Carregando...</span>}
            <div className="input-group">
              <label htmlFor="name">
                Nome
                <input
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Digite o nome"
                />
              </label>
              <label htmlFor="description">
                Nome
                <textarea
                  rows="3"
                  name="description"
                  id="description"
                  value={description}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Digite a descrição"
                />
              </label>
              <label htmlFor="url">
                URL
                <input
                  name="url"
                  id="url"
                  value={url}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Digite um link do produto"
                />
              </label>

              <Mutation mutation={CREATE_PRODUCT}>
                {createProduct => (
                  <button type="submit" onClick={e => this.handleSubmit(e, createProduct)}>
                    Salvar
                  </button>
                )}
              </Mutation>
            </div>
          </form>
        </Container>
      </>
    );
  }
}
