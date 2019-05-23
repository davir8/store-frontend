import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_PRODUCTS = gql`
  query getProducts($filter: String) {
    products(filter: $filter) {
      id
      name
      description
      url
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query($id: ID!) {
    product(id: $id) {
      id
      name
      description
      url
    }
  }
`;
