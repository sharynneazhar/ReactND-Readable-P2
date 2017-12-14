import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import { calculateDate } from '../utils/helpers';
import Voter from '../components/Voter';

const Comment = ({ comment }) => (
  <List.Item
    key={comment.id}
    actions={[
      <Link to="#" style={styles.actionText}>Edit</Link>,
      <Link to="#" style={styles.actionText}>Delete</Link>,
      <Voter item={comment} />
    ]}
  >
    <List.Item.Meta
      description={
        <span>
          <Link to="#" style={styles.author}>{comment.author}</Link>
          <span style={styles.date}>{calculateDate(comment.timestamp)}</span>
        </span>
      }
    />
    {comment.body}
  </List.Item>
)

const styles = {
  actionText: {
    color: "#666",
    fontSize: 12,
    fontWeight: 600,
  },
  author: {
    fontWeight: 600,
  },
  date: {
    marginLeft: 10,
    color: "#888",
  },
}

export default Comment;
