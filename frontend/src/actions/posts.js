import * as ReadableAPI from '../utils/ReadableAPI';
import { REQUEST_POSTS, RECEIVE_POSTS } from './constants';

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS,
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const fetchPosts = (category) => {
  return dispatch => {
    dispatch(requestPosts());
    return ReadableAPI.fetchPosts(category)
      .then(posts => dispatch(receivePosts(posts)))
  }
}
