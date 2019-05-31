import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, Button } from '@material-ui/core';

import styles from './style';

const navBarItems = [
  'Home',
  'Central Board',
  'State Board',
  'Volunteers',
  'Volunteer Ship',
  'Complaints',
  'Donate',
  'Appointment',
  'Admission'
];

const NavBar = props => {
  const { classes, ...rest } = props;

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar disableGutters variant="dense" className={classes.toolbar}>
        {navBarItems.map(navBarItem => (
          <Button className={classes.button} {...rest}>
            {navBarItem}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NavBar);
