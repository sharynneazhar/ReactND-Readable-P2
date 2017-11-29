import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/constants';

const posts = (state = {}, action) => {
  const { posts } = action;
  switch (action.type) {
    case RECEIVE_POSTS:
      return posts
    default:
      return state
  }
}

export default posts;
