import React from 'react';
import { Icon } from 'antd';

const Voter = ({ votes }) => (
  <span>
    <Icon type="like-o" style={styles.icon} />
    <Icon type="dislike-o" style={styles.icon} />
    <span style={(votes < 0) ? styles.negVotes : styles.posVotes}>
      {votes}
    </span>
  </span>
)

const styles = {
  icon: {
    marginRight: 12,
  },
  posVotes: {
    marginRight: 8,
    fontWeight: 600,
    color: "#64b95f",
  },
  negVotes: {
    marginRight: 8,
    fontWeight: 600,
    color: "#e34b4b",
  },
}

export default Voter;
