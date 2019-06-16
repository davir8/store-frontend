import { ApolloClient } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { isAuthenticated, getToken } from './auth';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: isAuthenticated() ? `Bearer ${getToken()}` : '',
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
