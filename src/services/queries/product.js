import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query getProducts($filter: String) {
    products(filter: $filter) {
      page
      pages
      limit
      total
      docs {
        id
        name
        description
        url
        owner {
          id
          name
        }
      }
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
      owner {
        id
        name
        email
      }
      createdAt
    }
  }
`;
