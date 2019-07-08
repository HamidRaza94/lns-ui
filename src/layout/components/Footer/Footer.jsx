import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';
import { SVG } from '../../../components';

const Footer = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.warning}>
        <Typography className={classes.warningMsg}>
          The Central Chief Director is only authorized to change any person and
          the designation in written on this website.
        </Typography>
        <Typography className={classes.warningMsg}>
          The available name, designation and photo on this website does not
          mean that related person is permanent appointed in this institution.
        </Typography>
      </div>
      <div className={classes.mainFooter}>
        <Typography className={classes.designer}>
          Copyrights &copy; Lok Niyay Sansthan
        </Typography>
        <div className={classes.social}>
          <SVG variant="whatsapp" />
          <SVG variant="facebook" />
          <SVG variant="twitter" />
        </div>
        <Typography className={classes.designer}>
          Designed by: <br /> Mohammad Hamid Raza & Sagun Saluja
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
