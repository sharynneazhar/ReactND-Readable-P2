import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Icon } from 'antd';
import Voter from '../components/Voter';
import {
  capitalize,
  calculateDate,
  sortByDate,
  sortByVotes,
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

  renderMeta = (category) => (
    <span> in <Link to={`/${category}`}>{capitalize(category)}</Link></span>
  )

  render() {
    const { posts, sortBy } = this.props;
    const sortedPosts = this.sortPosts(posts, sortBy);

    return (
      <List
        style={styles.container}
        size="small"
        itemLayout="vertical"
        dataSource={sortedPosts}
        renderItem={post => (
          <List.Item
            key={post.id}
            style={styles.listItem}
            actions={[
              <Voter votes={post.voteScore} />,
              this.renderCommentCount(post.commentCount)
            ]}
          >
            <List.Item.Meta
              title={
                <Link to={`/${post.category}/${post.id}`} style={styles.title}>
                  {post.title}
                </Link>
              }
              description={
                <span>
                  {calculateDate(post.timestamp)} &middot;
                  Submitted by <Link to="#">{post.author}</Link>
                  {post.category && this.renderMeta(post.category)}
                </span>
              }
            />
          </List.Item>
        )}
      />
    )
  }
}

const styles = {
  container: {
    background: '#fff',
    marginTop: 20,
  },
  listItem: {
    padding: 20,
  },
  title: {
    color: '#1890ff',
  },
}

export default PostList;
