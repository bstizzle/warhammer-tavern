import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost'; 
import { ApolloProvider } from '@apollo/react-hooks';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import netlifyIdentity from 'netlify-identity-widget';

//use local port for development, use the netlify lambda address for production
const dev = process.env.NODE_ENV !== 'production';
const client = new ApolloClient({
  uri: dev ? 'http://localhost:4000/graphql' : '/.netlify/functions/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
});

//enable netlify auth
netlifyIdentity.init();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
