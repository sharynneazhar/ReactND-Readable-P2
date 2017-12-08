import React from 'react';
import { List, Icon } from 'antd';

const IconText = ({ type, type2, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {type2 ? <Icon type={type2} style={{ marginRight: 8 }} /> : ''}
    {text}
  </span>
);

const PostList = ({ posts, category }) => (
  <List
    itemLayout="vertical"
    dataSource={posts}
    renderItem={post => (
      <List.Item
        key={post.id}
        style={{ padding: 20 }}
        actions={[
          <IconText type="like-o" type2="dislike-o" text={post.voteScore} />,
          <IconText type="message" text={post.commentCount} />
        ]}
      >
        <List.Item.Meta
          title={post.title}
          description={post.author}
        />
        {post.body}
      </List.Item>
    )}
  />
)

export default PostList;
