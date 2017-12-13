import * as ReadableAPI from '../utils/ReadableAPI';
import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  // ADD_POST,
  // DELETE_POST,
  // EDIT_POST,
} from './constants';

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const fetchPosts = (category) => {
  return dispatch => {
    return ReadableAPI.fetchPosts(category)
      .then(posts => dispatch(receivePosts(posts)))
  }
}

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  }
}

export const fetchPost = (id) => {
  return dispatch => {
    return ReadableAPI.fetchPost(id)
      .then(post => dispatch(receivePost(post)))
  }
}
