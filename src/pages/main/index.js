import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_PRODUCTS } from '../../services/queries/product';

import Header from '../../components/Header';
import { Container } from './styles';

export default class Main extends Component {
  state = {
    hasMore: true,
  };

  handleScroll = (e, fetchMore, data) => {
    e.preventDefault();

    if (data.page >= data.pages) {
      this.setState({ hasMore: false });
      return;
    }

    if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
      fetchMore({
        variables: {
          limit: 4,
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
    const { hasMore } = this.state;
    return (
      <>
        <Header />
        <Container>
          <Query
            query={GET_PRODUCTS}
            variables={{
              limit: 4,
              page: 1,
            }}
            fetchPolicy="cache-and-network"
          >
            {({
              loading, error, data, fetchMore,
            }) => {
              if (loading) return <p>Carregando...</p>;

              if (error) return <p>Error!</p>;

              return (
                <div
                  style={{ height: '400px', overflow: 'auto' }}
                  onScroll={e => this.handleScroll(e, fetchMore, data.products)}
                >
                  {data.products.docs.map(product => (
                    <article key={product.id}>
                      <strong>{product.name}</strong>
                      <p>{product.description}</p>
                      <Link to={`/products/${product.id}`}>Acessar</Link>
                    </article>
                  ))}
                  {!hasMore && <div>Você chegou ao fim dos resultados!</div> }
                </div>
              );
            }}
          </Query>
        </Container>
      </>
    );
  }
}
