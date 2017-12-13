import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Row, Col, Icon } from 'antd';
import { fetchPost } from '../actions/posts';
import { fetchComments } from '../actions/comments';
import Header from '../components/Header';
import PostDetail from '../components/PostDetail';

class PostDetailContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
    this.props.fetchComments(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const id = nextProps.match.params.id;
      this.props.fetchPost(id);
      this.props.fetchComments(id);
    }
  }

  render() {
    const { post, comments } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout>
          <Layout.Header style={{
            height: 72,
            marginLeft: 20,
            marginRight: 20,
            padding: '20px',
            backgroundColor: '#fff',
            lineHeight: '12px'
          }}>
            <Row type="flex" align="middle" justify="start">
              <Col span={12}>
                <Link to="/">
                  <Icon type="arrow-left" style={{ marginRight: 8 }} />
                  Go Back
                </Link>
              </Col>
            </Row>
          </Layout.Header>
          <Layout.Content style={{ margin: 20 }}>
            <div style={{ background: '#fff' }}>
              {post && <PostDetail post={post} comments={comments} />}
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ posts, comments }) => ({
  post: posts,
  comments: comments,
})

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id)),
  fetchComments: id => dispatch(fetchComments(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
