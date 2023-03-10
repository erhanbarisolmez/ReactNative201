import React from 'react';
import {AppRegistry} from 'react-native';

import Router from './src/graphql-pokeapp/Router';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql-pokemon-h4r35xwzz-lucasbento.vercel.app/',
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
};

AppRegistry.registerComponent(appName, () => App);
