import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';
import { SVG } from '../../components';

const Footer = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography className={classes.warning}>
        The Central Chief Director is only authorized to change any person and
        the designation in written on this website.
      </Typography>
      <Typography className={classes.warning}>
        The available name, designation and photo on this website does not mean
        that related person is permanent appointed in this institution.
      </Typography>
      <div className={classes.social}>
        <SVG svg="whatsapp" />
        <SVG svg="facebook" />
        <SVG svg="twitter" />
      </div>
      <Typography className={classes.designer}>
        Designed and Maintained By Mohammad Hamid Raza
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
