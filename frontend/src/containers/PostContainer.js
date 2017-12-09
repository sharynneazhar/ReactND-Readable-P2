import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Row, Col, Breadcrumb, Button, Select } from 'antd';
import { fetchPosts } from '../actions/posts';
import { capitalize } from '../utils/helpers';
import Header from '../components/Header';
import PostList from '../components/PostList';
import NoPosts from '../components/NoPosts';

class PostContainer extends Component {
  state = {
    sortBy: 'date'
  }

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

  renderBreadcrumb = (category) => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/${category}`}>
            {category && capitalize(category)}
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }

  renderPosts = (posts, category) => {
    if (posts.length > 0) {
      return <PostList posts={posts} category={category} sortBy={this.state.sortBy} />
    }
    return <NoPosts category={category} />
  }

  handleSorting = (sortBy) => {
    this.setState({ sortBy });
  }

  render() {
    const { posts, match } = this.props;
    const category = match.params.category;
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
            <Row type="flex" align="middle" justify="space-between">
              <Col span={12}>{this.renderBreadcrumb(category)}</Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Button type="primary" icon="plus">Add New Post</Button>
              </Col>
            </Row>
          </Layout.Header>
          <Layout.Content style={{ margin: 20 }}>
            <Row type="flex" align="middle" justify="end">
              <Col span={12} style={{ textAlign: 'right' }}>
                <span style={{ marginRight: 8, fontWeight: 600 }}>
                  Sort By
                </span>
                <Select
                  defaultValue="date"
                  style={{ width: 145 }}
                  onChange={this.handleSorting}
                >
                  <Select.Option value="date">Most Recent</Select.Option>
                  <Select.Option value="votes">Votes</Select.Option>
                </Select>
              </Col>
            </Row>
            <div style={{ background: '#fff', marginTop: 20 }}>
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
