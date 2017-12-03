import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
query {
  posts {
    title
    createdAt
    author {
      name
    }
  }
}
`;

const postToJSX = ({ title, author, createdAt }) => (
  <div>
    <h1>{title}</h1>
    <h3>{author.name}</h3>
    <h3>{createdAt}</h3>
  </div>
);

class Posts extends Component {
  render() {
    const { loading, error, posts } = this.props.data;

    if (loading) {
      return (
        <div>Loading...</div>
      );
    }

    if (error) {
      return (
        <div>{error.message}</div>
      );
    }

    return (
      <div>
        {posts.map(postToJSX)}
      </div>
    );
  }
}
export default graphql(query)(Posts);
