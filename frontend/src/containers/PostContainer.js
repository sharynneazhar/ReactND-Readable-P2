import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { fetchPosts } from '../actions/posts';
import Header from '../components/Header';
import PostList from '../components/PostList';
import NoPosts from '../components/NoPosts';

class PostContainer extends Component {
  componentDidMount() {
    const category = this.props.match.params.category;
    this.props.fetchPosts(category);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      const category = nextProps.match.params.category;
      this.props.fetchPosts(category);
    }
  }

  renderPosts = (posts, category) => {
    if (posts.length > 0) {
      return <PostList posts={posts} category={category} />
    }
    return <NoPosts category={category} />
  }

  render() {
    const { posts, match } = this.props;
    const category = match.params.category;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout>
          <Layout.Content style={{ margin: 20 }}>
            <div style={{ background: '#fff' }}>
              {this.renderPosts(posts, category)}
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts,
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
