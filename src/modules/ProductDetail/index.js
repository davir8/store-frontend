import React from 'react';
import { shape, string } from 'prop-types';

import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import moment from 'moment';
import { GET_PRODUCT_BY_ID } from '../../services/queries/product';
import 'moment/locale/pt-br';

import { Container } from './styles';
import Header from '../Header';

const ProductDetail = ({ match }) => {
  const { id } = match.params;
  return (
    <>
      <Header />
      <Container>
        <Query query={GET_PRODUCT_BY_ID} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Carregando...</p>;

            if (error) return <p>Error!</p>;

            return (
              <article>
                <header>
                  <Link to="/" className="back">
                    <i className="fa fa-arrow-left" />
                  </Link>
                  <h2>{data.product.name}</h2>
                </header>
                <time>Cadastrado {moment(data.product.createdAt).fromNow()}</time>
                <p>{data.product.description}</p>
                <div className="info-owner">
                  <strong>Informações do proprietário</strong>
                  <span>Nome: {data.product.owner.name}</span>
                  <span>Email: {data.product.owner.email}</span>
                </div>
                <footer>
                  <span>Mais informações em: </span>
                  <Link to={`${data.product.url}`} target="_blank" rel="noopener noreferrer">
                    {data.product.url}
                  </Link>
                </footer>
              </article>
            );
          }}
        </Query>
      </Container>
    </>
  );
};

ProductDetail.propTypes = {
  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

export default ProductDetail;
