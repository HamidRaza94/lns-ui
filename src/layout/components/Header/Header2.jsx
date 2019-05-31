import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import styles from './styles2';
import { LOGO_IMAGE } from '../../../config';
import { SVG } from '../SVG';

const Header = props => {
  const { classes } = props;

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={3}>
          <img
            src={LOGO_IMAGE}
            alt="Lok Niyay Sansthan"
            className={classes.image}
          />
        </Grid>
        <Grid item sm={6}>
          <Typography className={classes.title}>
            लोक न्याय संस्थान <br />
            PUBLIC JUSTICE INSTITUTION <br />
            नई दिल्ली/NEW DELHI
          </Typography>
        </Grid>
        <Grid item sm={3}>
          <SVG svg="whatsapp" />
          <SVG svg="facebook" />
          <SVG svg="twitter" />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Header);
