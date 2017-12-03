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

const postToJSX = (post) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.author.name}</h3>
      <h3>{post.createdAt}</h3>
    </div>
  );
};

class Posts extends Component {
  render() {
    const data = this.props.data;
    const loading = data.loading;
    const error = data.error;
    const posts = data.posts;

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
