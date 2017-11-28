import * as ReadableAPI from '../utils/ReadableAPI';
import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from './constants';

export const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES,
  }
}

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => {
  return dispatch => {
    dispatch(requestCategories());
    return ReadableAPI.fetchCategories()
      .then(categories => dispatch(receiveCategories(categories)))
  }
}
