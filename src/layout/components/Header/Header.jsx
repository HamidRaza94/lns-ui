import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import styles from './style';
import header from '../../../cms/header';
import { LOGO_FOLDER, LOGO_IMAGE } from '../../../cms/constants';

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
            <img src={LOGO_IMAGE} alt={header.lns} className={classes.lns} />
          </Grid>
          <Grid item>
            <Typography align="center" className={classes.title}>
              {header.lnsHindi} <br />
              {header.pji} <br />
              {header.approvedBy} <br />
              {header.goi} <br />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.header}>
        <Grid container alignItems="center" justify="space-around">
          <Grid item>
            <img
              src={`${LOGO_FOLDER}/gandhi-150.jpg`}
              alt={header.gandhi150}
              className={classes.gandhi150}
            />
          </Grid>
          <Grid item>
            <img
              src={`${LOGO_FOLDER}/swatch_india.png`}
              alt={header.swatchBharat}
              className={classes.swatchBharat}
            />
          </Grid>
          <Grid item>
            <img
              src={`${LOGO_FOLDER}/code_india.jpg`}
              alt={header.codeIndia}
              className={classes.codeIndia}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

Header.defaultProps = {
  classes: {},
}

export default withStyles(styles)(Header);
