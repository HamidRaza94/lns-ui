import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';
import { header } from '../../../cms';
import { LOGO_FOLDER, LOGO_IMAGE } from '../../../lib/extra/constants';

const Header = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.leftHeader}>
      <img
        src={LOGO_IMAGE}
        alt={header.lns}
        className={classes.logoImage}
      />
      <Typography align="center" className={classes.title}>
        {header.lnsHindi} <br />
        {header.pji} <br />
        {header.approvedBy} <br />
        {header.goi} <br />
      </Typography>
    </div>
    <div className={classes.rightHeader}>
      <img
        src={`${LOGO_FOLDER}/gandhi-150.jpg`}
        alt={header.gandhi150}
        className={classes.gandhi150}
      />
      <img
        src={`${LOGO_FOLDER}/swatch_india.png`}
        alt={header.swatchBharat}
        className={classes.swatchBharat}
      />
      <img
        src={`${LOGO_FOLDER}/code_india.jpg`}
        alt={header.codeIndia}
        className={classes.codeIndia}
      />
    </div>
  </div>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

Header.defaultProps = {
  classes: {},
}

export default withStyles(styles)(Header);
