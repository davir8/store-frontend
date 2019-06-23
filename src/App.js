import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './services/apollo';

import Routes from './routes';

import GlobalStyle from './common/utils';

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Routes />
      <GlobalStyle />
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
