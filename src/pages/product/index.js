import React, { Component } from 'react';
import { shape, string } from 'prop-types';

import { Query } from 'react-apollo';
import { GET_PRODUCT_BY_ID } from '../../services/queries/product';

import { Container } from './styles';

export default class Product extends Component {
  static propTypes = {
    match: shape({
      params: shape({
        id: string,
      }),
    }).isRequired,
  };

  state = {
    // eslint-disable-next-line react/no-unused-state
    product: {},
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <Container>
        <Query query={GET_PRODUCT_BY_ID} variables={id}>
          {({ loading, error, data }) => {
            if (loading) return <p>Carregando...</p>;

            if (error) return <p>Error!</p>;

            return (
              <>
                <h1>{data.getProduct.title}</h1>
                <p>{data.getProduct.description}</p>
                <p>
                  URL: <a href={data.getProduct.url}>{data.getProduct.url}</a>
                </p>
              </>
            );
          }}
        </Query>
      </Container>
    );
  }
}
