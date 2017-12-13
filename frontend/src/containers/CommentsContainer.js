import React, { Component } from 'react';
import { Row, Col, List, Button, Input } from 'antd';
import { sortByDate, sortByVotes } from '../utils/helpers';
import Comment from '../components/Comment';
import SortBy from '../components/SortBy';

class CommentsContainer extends Component {
  state = {
    sortBy: 'date'
  }

  sortComments = (comments, sortBy) => {
    return sortBy === "votes" ? sortByVotes(comments) : sortByDate(comments);
  }

  onSortChange = (sortBy) => {
    this.setState({ sortBy })
  }

  render() {
    const { comments } = this.props;
    const sortedComments = this.sortComments(comments, this.state.sortBy);

    return (
      <div style={styles.container}>
        <h3>Comments</h3>
        <div style={styles.addCommentContainer}>
          <Input.TextArea rows={4} placeholder={'Write a comment'} />
          <Button type="primary" size="small" style={styles.postCommentBtn}>Post</Button>
        </div>
        <Row type="flex" align="bottom">
          <Col span={12}><span>{comments.length} comments</span></Col>
          <Col span={12}>
            <SortBy align="right" size="small" onSortChange={this.onSortChange} />
          </Col>
        </Row>
        <hr />
        {comments.length > 0 &&
          <List
            itemLayout="vertical"
            size="small"
            dataSource={sortedComments}
            renderItem={comment => <Comment comment={comment} />}
          />
        }
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 20,
    background: '#fff',
  },
  addCommentContainer: {
    marginTop: 15,
    marginBottom: 30,
  },
  postCommentBtn: {
    marginTop: 12,
  },
};

export default CommentsContainer;
