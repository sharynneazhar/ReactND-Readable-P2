import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { Card, Row, Col } from 'antd';
import { capitalize } from '../utils/helpers';

class PostDetail extends Component {
  render() {
    const { post, comments } = this.props;
    return (
      <Row style={{ background: '#f0f2f5' }}>
        <Col style={{ marginBottom: 12 }}>
          <Card>
            <Card.Meta
              title={post.title}
              description={
                <span>
                  {`Posted ${Moment(post.timestamp).fromNow()} by ${post.author} to `}
                  <Link to={`/${post.category}`}>{capitalize(post.category)}</Link>
                </span>
              }
            />
            <hr />
            <div>{post.body}</div>
          </Card>
        </Col>
        <Col>
          <Card>
            <h4>Comments</h4>
            <hr />


          </Card>
        </Col>
      </Row>
    )
  }
}

export default PostDetail;
