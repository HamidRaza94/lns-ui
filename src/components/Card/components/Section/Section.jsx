import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { capitalizeAll } from '../../../../lib/utils/helpers';

const Section = props => {
  const { classes, data } = props;
  const { title, image } = data;

  return (
    <div className={classes.card}>
      <img className={classes.image} alt={title} src={image}/>
      <div className={classes.text}>{capitalizeAll(title)}</div>
    </div>
  );
}

export default withStyles(styles)(Section);
