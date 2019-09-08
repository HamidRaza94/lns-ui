import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core';

import styles from './style';
import { capitalizeAll } from '../../../../lib/utils/helpers';

const Section = ({ classes, data: { title, image } }) => (
  <div className={classes.card}>
    <img className={classes.image} alt={title} src={image}/>
    <div className={classes.text}>{capitalizeAll(title)}</div>
  </div>
)

Section.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default withStyles(styles)(Section);
