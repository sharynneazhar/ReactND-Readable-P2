import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Icon } from 'antd';
import {
  capitalize,
  calculateDate,
  sortByDate,
  sortByVotes,
  displayVotes,
} from '../utils/helpers';

class PostList extends Component {
  sortPosts = (posts, sortBy) => {
    return sortBy === "votes" ? sortByVotes(posts) : sortByDate(posts);
  }

  renderCommentCount = (commentCount) => (
    <span>
      <Icon type="message" style={{ marginRight: 10 }} />
      {commentCount}
    </span>
  )

  render() {
    const { posts, sortBy } = this.props;
    const sortedPosts = this.sortPosts(posts, sortBy);

    return (
      <List
        size="small"
        itemLayout="vertical"
        dataSource={sortedPosts}
        renderItem={post => (
          <List.Item
            key={post.id}
            style={{ padding: 14 }}
            actions={[
              displayVotes(post.voteScore),
              this.renderCommentCount(post.commentCount)
            ]}
          >
            <List.Item.Meta
              title={
                <Link to={`/${post.category}/${post.id}`} style={{ color: '#1890ff'}}>
                  {post.title}
                </Link>
              }
              description={
                <span>
                  {`Posted ${calculateDate(post.timestamp)} by ${post.author} to `}
                  <Link to={`/${post.category}`}>{capitalize(post.category)}</Link>
                </span>
              }
            />
          </List.Item>
        )}
      />
    )
  }
}

export default PostList;
