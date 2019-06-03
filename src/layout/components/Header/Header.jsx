import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import { styles } from './styles';
import { LOGO_IMAGE } from '../../../config';

const Header = props => {
  const { classes } = props;

  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.root}
    >
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <img
              src={LOGO_IMAGE}
              alt="Lok Niyay Sansthan"
              className={classes.lns}
            />
          </Grid>
          <Grid item>
            <Typography align="center" className={classes.title}>
              लोक न्याय संस्थान <br />
              PUBLIC JUSTICE INSTITUTION <br />
              अभिहित अंतर्गत/APP. BY <br />
              भारत सरकार/GOVERNMENT OF INDIA
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.header}>
        <Grid container alignItems="center" justify="space-around">
          <Grid item>
            <img
              src={`./images/logo/gandhi-150.jpg`}
              alt="Gandhi 150"
              className={classes.gandhi150}
            />
          </Grid>
          <Grid item>
            <img
              src={`./images/logo/swatch_india.png`}
              alt="Swatch Bharat"
              className={classes.swatchBharat}
            />
          </Grid>
          <Grid item>
            <img
              src={`./images/logo/code_india.jpg`}
              alt="Swatch Bharat"
              className={classes.codeIndia}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);
