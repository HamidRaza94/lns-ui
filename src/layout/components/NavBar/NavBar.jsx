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
      active: 'home',
      home: navStyle,
      centralBoard: navStyle,
      stateBoard: navStyle,
      volunteers: navStyle,
      volunteerShip: navStyle,
      complaints: navStyle,
      donate: navStyle,
      appointment: navStyle,
      academics: navStyle,
      academics1: navStyle,
      academics2: navStyle,
      academics3: navStyle,
      academics4: navStyle,
      academics5: navStyle,
      academics6: navStyle,
      academics7: navStyle,
      academics8: navStyle,
      academics9: navStyle,
      academics10: navStyle,
      employees: navStyle,
      studyCenter: navStyle,
      academicsLI: {
        visibility: 'hidden',
        opacity: 0,
        display: ''
      }
    };
  }

  handleButtonHover = (item, value) => () => {
    this.setState({
      [item]: {
        backgroundColor: value
      }
    });

    if (item === 'academics') {
      if (value === '#a9502c') {
        this.handleSubItemEnter(item)();
      } else {
        this.handleSubItemLeave(item)();
      }
    }
  };

  handleSubItemEnter = item => () => {
    this.setState({
      academicsLI: {
        visibility: 'visible',
        opacity: 1,
        display: 'block'
      }
    });
  };

  handleSubItemLeave = item => () => {
    this.setState({
      academicsLI: {
        visibility: 'hidden',
        opacity: 0,
        display: ''
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
      academics1,
      academics2,
      academics3,
      academics4,
      academics5,
      academics6,
      academics7,
      academics8,
      academics9,
      academics10,
      employees,
      studyCenter,
      academicsLI
    } = this.state;

    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <Link to="/">
            <li
              className={classes.li}
              style={home}
              onMouseEnter={this.handleButtonHover('home', secondary)}
              onMouseLeave={this.handleButtonHover('home', primary)}
            >
              <Typography className={classes.text}>Home</Typography>
            </li>
          </Link>
          <Link to="/central_board">
            <li
              className={classes.li}
              style={centralBoard}
              onMouseEnter={this.handleButtonHover('centralBoard', secondary)}
              onMouseLeave={this.handleButtonHover('centralBoard', primary)}
            >
              <Typography className={classes.text}>Central Board</Typography>
            </li>
          </Link>
          <Link to="/state_board">
            <li
              className={classes.li}
              style={stateBoard}
              onMouseEnter={this.handleButtonHover('stateBoard', secondary)}
              onMouseLeave={this.handleButtonHover('stateBoard', primary)}
            >
              <Typography className={classes.text}>State Board</Typography>
            </li>
          </Link>
          <Link to="/volunteers">
            <li
              className={classes.li}
              style={volunteers}
              onMouseEnter={this.handleButtonHover('volunteers', secondary)}
              onMouseLeave={this.handleButtonHover('volunteers', primary)}
            >
              <Typography className={classes.text}>Volunteers</Typography>
            </li>
          </Link>
          <Link to="/volunteer_ship">
            <li
              className={classes.li}
              style={volunteerShip}
              onMouseEnter={this.handleButtonHover('volunteerShip', secondary)}
              onMouseLeave={this.handleButtonHover('volunteerShip', primary)}
            >
              <Typography className={classes.text}>Volunteer Ship</Typography>
            </li>
          </Link>
          <Link to="/complaints">
            <li
              className={classes.li}
              style={complaints}
              onMouseEnter={this.handleButtonHover('complaints', secondary)}
              onMouseLeave={this.handleButtonHover('complaints', primary)}
            >
              <Typography className={classes.text}>Complaints</Typography>
            </li>
          </Link>
          <Link to="/donate">
            <li
              className={classes.li}
              style={donate}
              onMouseEnter={this.handleButtonHover('donate', secondary)}
              onMouseLeave={this.handleButtonHover('donate', primary)}
            >
              <Typography className={classes.text}>Donate</Typography>
            </li>
          </Link>
          <Link to="/appointment">
            <li
              className={classes.li}
              style={appointment}
              onMouseEnter={this.handleButtonHover('appointment', secondary)}
              onMouseLeave={this.handleButtonHover('appointment', primary)}
            >
              <Typography className={classes.text}>Appointment</Typography>
            </li>
          </Link>
          <Link to="/admission">
            <li
              className={classes.li}
              style={academics}
              onMouseEnter={this.handleButtonHover('academics', secondary)}
              onMouseLeave={this.handleButtonHover('academics', primary)}
            >
              <Typography className={classes.text}>Academics</Typography>
              <ul className={classes.ul_li_ul} style={academicsLI}>
                <Link to="/student_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics1}
                    onMouseEnter={this.handleButtonHover(
                      'academics1',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics1', primary)}
                  >
                    <Typography className={classes.text}>
                      Student Registration
                    </Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics2}
                    onMouseEnter={this.handleButtonHover(
                      'academics2',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics2', primary)}
                  >
                    <Typography className={classes.text}>
                      Examination Registration
                    </Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics3}
                    onMouseEnter={this.handleButtonHover(
                      'academics3',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics3', primary)}
                  >
                    <Typography className={classes.text}>Course</Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics4}
                    onMouseEnter={this.handleButtonHover(
                      'academics4',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics4', primary)}
                  >
                    <Typography className={classes.text}>
                      Fee Structure
                    </Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics5}
                    onMouseEnter={this.handleButtonHover(
                      'academics5',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics5', primary)}
                  >
                    <Typography className={classes.text}>
                      Student List
                    </Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics6}
                    onMouseEnter={this.handleButtonHover(
                      'academics6',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics6', primary)}
                  >
                    <Typography className={classes.text}>
                      Passing Certificate
                    </Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics7}
                    onMouseEnter={this.handleButtonHover(
                      'academics7',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics7', primary)}
                  >
                    <Typography className={classes.text}>
                      Academic Center
                    </Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics8}
                    onMouseEnter={this.handleButtonHover(
                      'academics8',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics8', primary)}
                  >
                    <Typography className={classes.text}>
                      Pay Online Academic Fees
                    </Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics9}
                    onMouseEnter={this.handleButtonHover(
                      'academics9',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover('academics9', primary)}
                  >
                    <Typography className={classes.text}>Syllabus</Typography>
                  </li>
                </Link>
                <Link to="/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academics10}
                    onMouseEnter={this.handleButtonHover(
                      'academics10',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'academics10',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Student Attendance
                    </Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to="/employees">
            <li
              className={classes.li}
              style={employees}
              onMouseEnter={this.handleButtonHover('employees', secondary)}
              onMouseLeave={this.handleButtonHover('employees', primary)}
            >
              <Typography className={classes.text}>Employees</Typography>
            </li>
          </Link>
          <Link to="/study_center">
            <li
              className={classes.li}
              style={studyCenter}
              onMouseEnter={this.handleButtonHover('studyCenter', secondary)}
              onMouseLeave={this.handleButtonHover('studyCenter', primary)}
            >
              <Typography className={classes.text}>Study Center</Typography>
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
