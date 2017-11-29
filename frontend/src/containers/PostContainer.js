import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { fetchPosts } from '../actions/posts';
import { capitalize } from '../utils/helpers';
import {
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

const PostItem = props => {
  const { post } = props;
  return (
    <li
      className="list-group-item"
      onClick={() => {}}
    >
      <Grid>
      <Row className="show-grid">
        <Col xs={2} md={1} className="text-center">
          <h1>{post.voteScore}</h1>
        </Col>
        <Col xs={10} md={11}>
          <h3>{post.title}</h3>
          <p>
            Category: {post.category} |
            Date Posted: <Moment format="dddd, MMM Do YYYY, h:mm:ss A">{post.timestamp}</Moment>
          </p>
          <p>{post.body}</p>
          <p><em>Comments: {post.commentCount}</em></p>
        </Col>
      </Row>
      </Grid>
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

  render() {
    const { posts, match } = this.props;
    return (
      <ListGroup>
        {posts.length > 0 ? posts.map((post, key) => (
          <PostItem key={key} post={post} />
        )) : (
          <div>
            <h2>No posts in {match.params.category && capitalize(match.params.category)}.</h2>
          </div>
        )}
      </ListGroup>
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
