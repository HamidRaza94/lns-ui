import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';
import { capitalizeAll } from '../../../../lib/utils/helpers';

const Section = props => {
  const { classes, data } = props;
  const { media, mediaText } = data;

  return (
    <div className={classes.card}>
      <img className={classes.image} alt={mediaText} src={media}/>
      <div className={classes.text}>{capitalizeAll(mediaText)}</div>
    </div>
  );
}

export default withStyles(styles)(Section);
