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
      studentRegistration: navStyle,
      examinationRegistration: navStyle,
      course: navStyle,
      feeStructure: navStyle,
      studentList: navStyle,
      passingCertificate: navStyle,
      academicCenter: navStyle,
      payOnlineAcademicsFees: navStyle,
      syllabus: navStyle,
      studentAttendance: navStyle,
      employees: navStyle,
      employments: navStyle,
      staffSelectionBoard: navStyle,
      centralStaffSelectionBoard: navStyle,
      stateStaffSelectionBoard: navStyle,
      academicsList: {
        visibility: 'hidden',
        opacity: 0,
        display: ''
      },
      staffSelectionBoardList: {
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

    const itemList = item.toString() + 'List';
    let visible = false;

    if (value === secondary) {
      visible = true;
    }

    this.handleSubItem(itemList, visible)();
  };

  handleSubItem = (itemList, visible) => () => {
    let itemListStyle;

    if (visible) {
      itemListStyle = {
        visibility: 'visible',
        opacity: 1,
        display: 'block'
      };
    } else {
      itemListStyle = {
        visibility: 'hidden',
        opacity: 0,
        display: ''
      };
    }

    this.setState({
      [itemList]: itemListStyle
    });
  };

  handleClick = item => () => {
    this.setState({
      active: item
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
      studentRegistration,
      examinationRegistration,
      course,
      feeStructure,
      studentList,
      passingCertificate,
      academicCenter,
      payOnlineAcademicsFees,
      syllabus,
      studentAttendance,
      employees,
      employments,
      staffSelectionBoard,
      centralStaffSelectionBoard,
      stateStaffSelectionBoard,
      academicsList,
      staffSelectionBoardList
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
              onClick={this.handleClick('home')}
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
              onClick={this.handleClick('centralBoard')}
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
          <Link to="/academics">
            <li
              className={classes.li}
              style={academics}
              onMouseEnter={this.handleButtonHover('academics', secondary)}
              onMouseLeave={this.handleButtonHover('academics', primary)}
            >
              <Typography className={classes.text}>Academics</Typography>
              <ul className={classes.ul_li_ul} style={academicsList}>
                <Link to="/academics/student_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={studentRegistration}
                    onMouseEnter={this.handleButtonHover(
                      'studentRegistration',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'studentRegistration',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Student Registration
                    </Typography>
                  </li>
                </Link>
                <Link to="/academics/examination_registration">
                  <li
                    className={classes.ul_li_ul_li}
                    style={examinationRegistration}
                    onMouseEnter={this.handleButtonHover(
                      'examinationRegistration',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'examinationRegistration',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Examination Registration
                    </Typography>
                  </li>
                </Link>
                <Link to="/academics/course">
                  <li
                    className={classes.ul_li_ul_li}
                    style={course}
                    onMouseEnter={this.handleButtonHover('course', secondary)}
                    onMouseLeave={this.handleButtonHover('course', primary)}
                  >
                    <Typography className={classes.text}>Course</Typography>
                  </li>
                </Link>
                <Link to="/academics/fee_structure">
                  <li
                    className={classes.ul_li_ul_li}
                    style={feeStructure}
                    onMouseEnter={this.handleButtonHover(
                      'feeStructure',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'feeStructure',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Fee Structure
                    </Typography>
                  </li>
                </Link>
                <Link to="/academics/student_list">
                  <li
                    className={classes.ul_li_ul_li}
                    style={studentList}
                    onMouseEnter={this.handleButtonHover(
                      'studentList',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'studentList',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Student List
                    </Typography>
                  </li>
                </Link>
                <Link to="/academics/passing_certificate">
                  <li
                    className={classes.ul_li_ul_li}
                    style={passingCertificate}
                    onMouseEnter={this.handleButtonHover(
                      'passingCertificate',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'passingCertificate',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Passing Certificate
                    </Typography>
                  </li>
                </Link>
                <Link to="/academics/academic_center">
                  <li
                    className={classes.ul_li_ul_li}
                    style={academicCenter}
                    onMouseEnter={this.handleButtonHover(
                      'academicCenter',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'academicCenter',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Academic Center
                    </Typography>
                  </li>
                </Link>
                <Link to="/academics/pay_online_academics_fees">
                  <li
                    className={classes.ul_li_ul_li}
                    style={payOnlineAcademicsFees}
                    onMouseEnter={this.handleButtonHover(
                      'payOnlineAcademicsFees',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'payOnlineAcademicsFees',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Pay Online Academic Fees
                    </Typography>
                  </li>
                </Link>
                <Link to="/academics/syllabus">
                  <li
                    className={classes.ul_li_ul_li}
                    style={syllabus}
                    onMouseEnter={this.handleButtonHover('syllabus', secondary)}
                    onMouseLeave={this.handleButtonHover('syllabus', primary)}
                  >
                    <Typography className={classes.text}>Syllabus</Typography>
                  </li>
                </Link>
                <Link to="/academics/student_attendance">
                  <li
                    className={classes.ul_li_ul_li}
                    style={studentAttendance}
                    onMouseEnter={this.handleButtonHover(
                      'studentAttendance',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'studentAttendance',
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
          <Link to="/employments">
            <li
              className={classes.li}
              style={employments}
              onMouseEnter={this.handleButtonHover('employments', secondary)}
              onMouseLeave={this.handleButtonHover('employments', primary)}
            >
              <Typography className={classes.text}>Employments</Typography>
            </li>
          </Link>
          <Link to="/staff_selection_board">
            <li
              className={classes.li}
              style={staffSelectionBoard}
              onMouseEnter={this.handleButtonHover(
                'staffSelectionBoard',
                secondary
              )}
              onMouseLeave={this.handleButtonHover(
                'staffSelectionBoard',
                primary
              )}
            >
              <Typography className={classes.text}>
                Staff Selection Board
              </Typography>
              <ul className={classes.ul_li_ul} style={staffSelectionBoardList}>
                <Link to="/staff_selection_board/central">
                  <li
                    className={classes.ul_li_ul_li}
                    style={centralStaffSelectionBoard}
                    onMouseEnter={this.handleButtonHover(
                      'centralStaffSelectionBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'centralStaffSelectionBoard',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      Central Staff Selection Board
                    </Typography>
                  </li>
                </Link>
                <Link to="/staff_selection_board/state">
                  <li
                    className={classes.ul_li_ul_li}
                    style={stateStaffSelectionBoard}
                    onMouseEnter={this.handleButtonHover(
                      'stateStaffSelectionBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'stateStaffSelectionBoard',
                      primary
                    )}
                  >
                    <Typography className={classes.text}>
                      State Staff Selection Board
                    </Typography>
                  </li>
                </Link>
              </ul>
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
