import React, { Component } from 'react';
import Moment from 'moment';
import { List, Icon, Tag } from 'antd';
import { capitalize, sortByDate, sortByVotes } from '../utils/helpers';

const IconText = ({ type, type2, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {type2 ? <Icon type={type2} style={{ marginRight: 8 }} /> : ''}
    {text}
  </span>
);

class PostList extends Component {
  sortPosts = (posts, sortBy) => {
    return sortBy === "votes" ? sortByVotes(posts) : sortByDate(posts);
  }

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
            style={{ padding: 20 }}
            actions={[
              <IconText type="like-o" type2="dislike-o" text={post.voteScore} />,
              <IconText type="message" text={post.commentCount} />,
              <Tag>{capitalize(post.category)}</Tag>
            ]}
          >
            <List.Item.Meta
              title={post.title}
              description={`Submitted ${Moment(post.timestamp).fromNow()} by ${post.author}`}
            />
            {post.body}
          </List.Item>
        )}
      />
    )
  }
}

export default PostList;
