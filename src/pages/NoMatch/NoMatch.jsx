import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';

const NoMatch = () => {
  return (
    <div>
      <h1>NoMatch Page</h1>
    </div>
  );
};

export default withStyles(styles)(NoMatch);
