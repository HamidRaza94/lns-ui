import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './style';

const NavBar = props => {
  const { classes } = props;

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link className={classes.link} to="/">
            Home
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/central_board">
            Central Board
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/state_board">
            State Board
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/volunteers">
            Volunteers
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/volunteer_ship">
            Volunteer Ship
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/complaints">
            Complaints
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/donate">
            Donate
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/appointment">
            Appointment
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.link} to="/admission">
            Admission
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NavBar);
