import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

const query = gql`
query {
  posts {
    id
    title
    contents
    author {
      name
    }
  }
}
`;

const PostHeader = (props) => {
  return (
    <h2 style={{ paddingRight: '10px', fontSize: '14px' }}>
      {props.title}
      <span style={{ float: 'right', fontSize: '10px', color: 'gray' }}>
        {props.authorName}
      </span>
    </h2>
  );
};

const postToJSX = (post) => {
  const header = (
    <PostHeader
      title={post.title}
      authorName={post.author.name}
    />
  );

  return (
    <Panel key={post.id} header={header}>
      <p>{post.contents}</p>
    </Panel>
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
      <Collapse bordered={false}>
        {posts.map(postToJSX)}
      </Collapse>
    );
  }
}
export default graphql(query)(Posts);
