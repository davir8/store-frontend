import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './services/apollo';

import Header from './components/Header';
// import Main from './pages/main';
import Routes from './routes';

import './styles.css';

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Header />
      <Routes />
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
