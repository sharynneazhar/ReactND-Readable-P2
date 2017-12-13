import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import { fetchPost } from '../actions/posts';
import { fetchComments } from '../actions/comments';
import Sidebar from '../components/Sidebar';
import PostDetail from '../components/PostDetail';

class PostDetailContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
    this.props.fetchComments(id);
  }

  render() {
    const { post, comments } = this.props;
    return (
      <Layout style={styles.layout}>
        <Sidebar />
        <Layout>
          <Layout.Header style={styles.layoutHeader}>
            <Link to="/">
              <Icon type="arrow-left" style={styles.icon} />
              Go Back
            </Link>
          </Layout.Header>
          <Layout.Content style={styles.layoutContent}>
            {post && <PostDetail post={post} comments={comments} />}
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

const styles = {
  layout: {
    minHeight: '100vh',
  },
  layoutHeader: {
    height: 72,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    backgroundColor: '#fff',
    lineHeight: '12px',
  },
  layoutContent: {
    margin: 20,
  },
  icon: {
    marginRight: 8,
  },
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
