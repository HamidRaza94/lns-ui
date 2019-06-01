import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';

const primary = '#254260';
const secondary = '#a9502c';
const navStyle = {
  backgroundColor: primary
};

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: navStyle,
      centralBoard: navStyle,
      stateBoard: navStyle,
      volunteers: navStyle,
      volunteerShip: navStyle,
      complaints: navStyle,
      donate: navStyle,
      appointment: navStyle,
      academics: navStyle,
      employees: navStyle,
      studyCenter: navStyle
    };
  }

  handleButtonHover = (item, value) => () => {
    this.setState({
      [item]: {
        backgroundColor: value
      }
    });
  };

  render() {
    const { classes } = this.props;
    const {
      home,
      centralBoard,
      stateBoard,
      volunteers,
      volunteerShip,
      complaints,
      donate,
      appointment,
      academics,
      employees,
      studyCenter
    } = this.state;

    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <Link className={classes.link} to="/">
            <li
              className={classes.li}
              style={home}
              onMouseEnter={this.handleButtonHover('home', secondary)}
              onMouseLeave={this.handleButtonHover('home', primary)}
            >
              <Typography className={classes.navText}>Home</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/central_board">
            <li
              className={classes.li}
              style={centralBoard}
              onMouseEnter={this.handleButtonHover('centralBoard', secondary)}
              onMouseLeave={this.handleButtonHover('centralBoard', primary)}
            >
              <Typography className={classes.navText}>Central Board</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/state_board">
            <li
              className={classes.li}
              style={stateBoard}
              onMouseEnter={this.handleButtonHover('stateBoard', secondary)}
              onMouseLeave={this.handleButtonHover('stateBoard', primary)}
            >
              <Typography className={classes.navText}>State Board</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/volunteers">
            <li
              className={classes.li}
              style={volunteers}
              onMouseEnter={this.handleButtonHover('volunteers', secondary)}
              onMouseLeave={this.handleButtonHover('volunteers', primary)}
            >
              <Typography className={classes.navText}>Volunteers</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/volunteer_ship">
            <li
              className={classes.li}
              style={volunteerShip}
              onMouseEnter={this.handleButtonHover('volunteerShip', secondary)}
              onMouseLeave={this.handleButtonHover('volunteerShip', primary)}
            >
              <Typography className={classes.navText}>
                Volunteer Ship
              </Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/complaints">
            <li
              className={classes.li}
              style={complaints}
              onMouseEnter={this.handleButtonHover('complaints', secondary)}
              onMouseLeave={this.handleButtonHover('complaints', primary)}
            >
              <Typography className={classes.navText}>Complaints</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/donate">
            <li
              className={classes.li}
              style={donate}
              onMouseEnter={this.handleButtonHover('donate', secondary)}
              onMouseLeave={this.handleButtonHover('donate', primary)}
            >
              <Typography className={classes.navText}>Donate</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/appointment">
            <li
              className={classes.li}
              style={appointment}
              onMouseEnter={this.handleButtonHover('appointment', secondary)}
              onMouseLeave={this.handleButtonHover('appointment', primary)}
            >
              <Typography className={classes.navText}>Appointment</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/admission">
            <li
              className={classes.li}
              style={academics}
              onMouseEnter={this.handleButtonHover('academics', secondary)}
              onMouseLeave={this.handleButtonHover('academics', primary)}
            >
              <Typography className={classes.navText}>Academics</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/employees">
            <li
              className={classes.li}
              style={employees}
              onMouseEnter={this.handleButtonHover('employees', secondary)}
              onMouseLeave={this.handleButtonHover('employees', primary)}
            >
              <Typography className={classes.navText}>Employees</Typography>
            </li>
          </Link>
          <Link className={classes.link} to="/study_center">
            <li
              className={classes.li}
              style={studyCenter}
              onMouseEnter={this.handleButtonHover('studyCenter', secondary)}
              onMouseLeave={this.handleButtonHover('studyCenter', primary)}
            >
              <Typography className={classes.navText}>Study Center</Typography>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NavBar);
