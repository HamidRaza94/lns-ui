import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './styles';

const personalDetail = props => {
  const { data } = props;

  const {
    candidateName,
  } = data;

  return (
    <label>
      Name:
      <input type="text" value={candidateName} />
    </label>
  );
};

export default withStyles(styles)(personalDetail);
