import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $description: String!, $url: String, $userId: ID) {
    createProduct(name: $name, description: $description, url: $url, userId: $userId) {
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
