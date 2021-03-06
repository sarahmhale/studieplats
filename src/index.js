import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://seatheat.herokuapp.com/graphql',
})

const ClientProvider = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>

    )
}

ReactDOM.render(<ClientProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
