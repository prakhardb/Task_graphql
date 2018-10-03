import React, { Component } from 'react';
import './App.css';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

client
  .query({
    query: gql`
      {
        me{
          username
        }
      }
    `
  })
  .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <div className="App">
      <ApolloProvider client={client}>
    <div>
      <h2>My first GraphQl App</h2>
    </div>
  </ApolloProvider>
  </div>
    );
  }
}

export default App;
