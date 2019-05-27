import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { debounce } from 'lodash';
import { GET_PRODUCTS } from '../../services/queries/product';

import Header from '../../components/Header';
import { Container } from './styles';

class Main extends Component {
  state = {
    filter: '',
  };

  handleSearch = debounce((e, fetchMore) => {
    const { filter } = this.state;

    fetchMore({
      variables: {
        limit: 5,
        page: 1,
        filter,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          products: {
            ...fetchMoreResult.products,
          },
        };
      },
    });
  }, 300);

  handleScroll = (e, fetchMore, data) => {
    e.preventDefault();

    if (data.page >= data.pages) {
      return;
    }

    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      fetchMore({
        variables: {
          limit: 5,
          page: data.page + 1,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;

          return {
            products: {
              ...prev.products,
              docs: [...prev.products.docs, ...fetchMoreResult.products.docs],
              page: fetchMoreResult.products.page,
            },
          };
        },
      });
    }
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Header />
        <Container>
          <Query query={GET_PRODUCTS}>
            {({
              loading, error, data, fetchMore,
            }) => {
              if (loading) {
                return <p>Carregando...</p>;
              }
              if (error) {
                return <p>Error!</p>;
              }

              return (
                <>
                  <div className="toolbar">
                    <Link to="/products/create">Adicionar produto</Link>
                    <div>
                      <input
                        type="text"
                        name="filter"
                        value={filter}
                        placeholder="Buscar..."
                        onChange={(e) => {
                          this.setState({ filter: e.target.value });
                          this.handleSearch(e, fetchMore, data.products);
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="list-products"
                    onScroll={e => this.handleScroll(e, fetchMore, data.products)}
                  >
                    {data.products.docs.map(product => (
                      <article key={product.id}>
                        <strong>{product.name}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product.id}`}>Acessar</Link>
                      </article>
                    ))}
                    {data.products.page === data.products.pages && (
                      <div>Você chegou ao fim dos resultados!</div>
                    )}
                  </div>
                  <span>Total: {data.products.docs.length}</span>
                </>
              );
            }}
          </Query>
        </Container>
      </>
    );
  }
}

export default Main;
