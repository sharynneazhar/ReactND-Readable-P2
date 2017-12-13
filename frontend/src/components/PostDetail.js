import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, List, Button, Input } from 'antd';
import { capitalize, calculateDate, displayVotes, sortByDate } from '../utils/helpers';

class PostDetail extends Component {
  render() {
    const { post, comments } = this.props;
    return (
      <div style={{ backgroundColor: '#f0f2f5' }}>
        <Row style={{ marginBottom: 15, padding: 20, background: '#fff' }}>
          <Col>
            <Row>
              <Col span={18} style={{ fontSize: 18 }}>{post.title}</Col>
              <Col span={6} style={{ textAlign: 'right', fontSize: 18 }}>
                {displayVotes(post.voteScore)}
              </Col>
            </Row>
            <div style={{ marginTop: 8, fontSize: 14, color: '#00000073' }}>
              {`Posted on ${calculateDate(post.timestamp)} by ${post.author} to `}
              <Link to={`/${post.category}`}>{capitalize(post.category)}</Link>
            </div>
            <hr />
            <div style={{ marginTop: 20 }}>{post.body}</div>
          </Col>
        </Row>
        <Row style={{ padding: 20, background: '#fff' }}>
          <Col>
            <h4>Comments</h4>
            <div style={{ marginTop: 15, marginBottom: 15 }}>
              <Input.TextArea rows={4} placeholder={'Write a comment'} />
              <Button
                type="primary"
                size="small"
                style={{
                  float: 'right',
                  marginTop: 12
                }}
              >
                Post
              </Button>
            </div>
            {comments.length > 0 &&
              <List
                itemLayout="vertical"
                size="small"
                dataSource={sortByDate(comments)}
                renderItem={comment => (
                  <List.Item
                    key={comment.id}
                    actions={[
                      <Link
                        to=""
                        style={{
                          color: "#666",
                          fontSize: 12,
                          fontWeight: 600
                        }}
                      >
                        Edit
                      </Link>,
                      <Link
                        to=""
                        style={{
                          color: "#666",
                          fontSize: 12,
                          fontWeight: 600
                        }}
                      >
                        Delete
                      </Link>,
                      displayVotes(comment.voteScore)
                    ]}
                  >
                    <List.Item.Meta
                      description={`Posted on ${calculateDate(comment.timestamp)} by ${comment.author}`}
                    />
                    {comment.body}
                  </List.Item>
                )}
              />
            }
          </Col>
        </Row>
      </div>
    )
  }
}

export default PostDetail;
