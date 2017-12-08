import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Layout } from 'antd';
import { fetchPosts } from '../actions/posts';
import Header from '../components/Header';
import NoPosts from '../components/NoPosts';

const PostItem = props => {
  const { post } = props;
  return (
    <li className="list-group-item" onClick={() => {}}>
      <div>
        <div>
          <div>
            <h1>{post.voteScore}</h1>
          </div>
          <div>
            <h3>{post.title}</h3>
            <p>
              Category: {post.category} |
              Date Posted: <Moment format="dddd, MMM Do YYYY, h:mm:ss A">{post.timestamp}</Moment>
            </p>
            <p>{post.body}</p>
            <p><em>Comments: {post.commentCount}</em></p>
          </div>
        </div>
      </div>
    </li>
  )
}

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
      return posts.map((post, key) => <PostItem key={key} post={post} />)
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
            <div style={{
              padding: 24,
              background: '#fff',
              minHeight: 360
            }}>
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
