import React from 'react';
import Moment from 'moment';
import { Icon } from 'antd';

export const capitalize = (str = '') => {
  if (str === '')
    return str
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}

export const calculateDate = (date) => {
  const daysAgo = -(Moment(date).diff(Moment(), 'days'));
  if (daysAgo > 30) {
    return Moment(date).format('MMMM Do, YYYY');
  }
  return Moment(date).fromNow();
}

export const sortByDate = (list) => {
  return list.sort((a, b) => a.timestamp < b.timestamp)
}

export const sortByVotes = (list) => {
  return list.sort((a, b) => b.voteScore > a.voteScore)
}

export const displayVotes = (votes) => {
  const color = votes < 0 ? "#e34b4b" : "#64b95f";
  return (
    <span>
      <Icon type="like-o" style={{ marginRight: 12 }} />
      <Icon type="dislike-o" style={{ marginRight: 12 }} />
      <span style={{ marginRight: 8, fontWeight: 600, color: `${color}`}}>
        {votes}
      </span>
    </span>
  )
}
