import * as ReadableAPI from '../utils/ReadableAPI';
import {
  RECEIVE_COMMENTS,
} from './constants';

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const fetchComments = (id) => {
  return dispatch => {
    return ReadableAPI.fetchComments(id)
      .then(comments => dispatch(receiveComments(comments)))
  }
}
