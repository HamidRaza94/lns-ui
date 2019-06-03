import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';

const NoMatch = () => {
  return (
    <div style={styles.root}>
      <div style={styles.status}>404</div>
      <div style={styles.message}>Page Not Found</div>
    </div>
  );
};

export default withStyles(styles)(NoMatch);
