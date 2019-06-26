import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import _ from 'lodash';

import styles from './style';
import { routes } from '../../../cms';

const primary = '#254260';
const secondary = '#a9502c';
const navStyle = {
  backgroundColor: primary
};
const navListStyle = {
  visibility: 'hidden',
  opacity: 0,
  display: ''
};

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: {},
      home: navStyle,
      board: {
        home: navStyle,
        central: {
          home: navStyle,
          protector: navStyle,
          advisory: navStyle,
          section: navStyle,
          staffSelection: navStyle,
          disciplinary: navStyle
        },
        state: {
          home: navStyle,
          advisory: navStyle,
          section: navStyle,
          staffSelection: navStyle,
          disciplinary: navStyle
        }
      },
      centralBoard: navStyle,
      stateBoard: navStyle,
      protectorBoard: navStyle,
      advisoryBoard: navStyle,
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
      admissionCell: navStyle,
      feesCollectionCell: navStyle,
      employees: navStyle,
      employments: navStyle,
      staffSelectionBoard: navStyle,
      centralStaffSelectionBoard: navStyle,
      stateStaffSelectionBoard: navStyle,
      boardList: navListStyle,
      academicsList: navListStyle,
      staffSelectionBoardList: navListStyle
    };
  }

  componentDidMount = () => {
    let activeButton = _.camelCase(
      window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    );

    if (activeButton === '') {
      activeButton = 'home';
    }

    this.setState({
      active: {
        [activeButton]: {
          backgroundColor: secondary
        }
      }
    });
  };

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
      active: {
        [item]: {
          backgroundColor: secondary
        }
      }
    });
  };

  render() {
    const { classes } = this.props;
    const {
      active,
      home,
      board,
      centralBoard,
      stateBoard,
      protectorBoard,
      advisoryBoard,
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
      admissionCell,
      feesCollectionCell,
      employees,
      employments,
      staffSelectionBoard,
      centralStaffSelectionBoard,
      stateStaffSelectionBoard,
      boardList,
      academicsList,
      staffSelectionBoardList
    } = this.state;

    const { path } = routes;

    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <Link to={path.home}>
            <li
              className={classes.li}
              style={{ ...home, ...active.home }}
              onMouseEnter={this.handleButtonHover('home', secondary)}
              onMouseLeave={this.handleButtonHover('home', primary)}
              onClick={this.handleClick('home')}
            >
              <Typography className={classes.text}>Home</Typography>
            </li>
          </Link>
          <Link to={path.board.home}>
            <li
              className={classes.li}
              style={{ ...board, ...active.board }}
              onMouseEnter={this.handleButtonHover('board', secondary)}
              onMouseLeave={this.handleButtonHover('board', primary)}
              onClick={this.handleClick('board')}
            >
              <Typography className={classes.text}>All Boards</Typography>
              <ul className={classes.ul_li_ul} style={boardList}>
                <Link to={path.board.central.home}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{ ...centralBoard, ...active.centralBoard }}
                    onMouseEnter={this.handleButtonHover(
                      'centralBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'centralBoard',
                      primary
                    )}
                    onClick={this.handleClick('centralBoard')}
                  >
                    <Typography className={classes.text}>
                      Central Board
                    </Typography>
                  </li>
                </Link>
                <Link to={path.board.central.protector}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...protectorBoard,
                      ...active.protectorBoard
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'protectorBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'protectorBoard',
                      primary
                    )}
                    onClick={this.handleClick('protectorBoard')}
                  >
                    <Typography className={classes.text}>
                      Protector Board
                    </Typography>
                  </li>
                </Link>
                <Link to={path.board.central.protector}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...protectorBoard,
                      ...active.protectorBoard
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'protectorBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'protectorBoard',
                      primary
                    )}
                    onClick={this.handleClick('protectorBoard')}
                  >
                    <Typography className={classes.text}>
                      Protector Board
                    </Typography>
                  </li>
                </Link>
                <Link to={path.board.central.protector}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...protectorBoard,
                      ...active.protectorBoard
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'protectorBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'protectorBoard',
                      primary
                    )}
                    onClick={this.handleClick('protectorBoard')}
                  >
                    <Typography className={classes.text}>
                      Protector Board
                    </Typography>
                  </li>
                </Link>
                <Link to={path.board.central.protector}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...protectorBoard,
                      ...active.protectorBoard
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'protectorBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'protectorBoard',
                      primary
                    )}
                    onClick={this.handleClick('protectorBoard')}
                  >
                    <Typography className={classes.text}>
                      Protector Board
                    </Typography>
                  </li>
                </Link>
                <Link to={path.board.central.protector}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...protectorBoard,
                      ...active.protectorBoard
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'protectorBoard',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'protectorBoard',
                      primary
                    )}
                    onClick={this.handleClick('protectorBoard')}
                  >
                    <Typography className={classes.text}>
                      Protector Board
                    </Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to={path.volunteers}>
            <li
              className={classes.li}
              style={{ ...volunteers, ...active.volunteers }}
              onMouseEnter={this.handleButtonHover('volunteers', secondary)}
              onMouseLeave={this.handleButtonHover('volunteers', primary)}
              onClick={this.handleClick('volunteers')}
            >
              <Typography className={classes.text}>Volunteers</Typography>
            </li>
          </Link>
          <Link to={path.volunteerShip}>
            <li
              className={classes.li}
              style={{ ...volunteerShip, ...active.volunteerShip }}
              onMouseEnter={this.handleButtonHover('volunteerShip', secondary)}
              onMouseLeave={this.handleButtonHover('volunteerShip', primary)}
              onClick={this.handleClick('volunteerShip')}
            >
              <Typography className={classes.text}>Volunteer Ship</Typography>
            </li>
          </Link>
          <Link to={path.complaints}>
            <li
              className={classes.li}
              style={{ ...complaints, ...active.complaints }}
              onMouseEnter={this.handleButtonHover('complaints', secondary)}
              onMouseLeave={this.handleButtonHover('complaints', primary)}
              onClick={this.handleClick('complaints')}
            >
              <Typography className={classes.text}>Complaints</Typography>
            </li>
          </Link>
          <Link to={path.donate}>
            <li
              className={classes.li}
              style={{ ...donate, ...active.donate }}
              onMouseEnter={this.handleButtonHover('donate', secondary)}
              onMouseLeave={this.handleButtonHover('donate', primary)}
              onClick={this.handleClick('donate')}
            >
              <Typography className={classes.text}>Donate</Typography>
            </li>
          </Link>
          <Link to={path.appointment}>
            <li
              className={classes.li}
              style={{ ...appointment, ...active.appointment }}
              onMouseEnter={this.handleButtonHover('appointment', secondary)}
              onMouseLeave={this.handleButtonHover('appointment', primary)}
              onClick={this.handleClick('appointment')}
            >
              <Typography className={classes.text}>Appointment</Typography>
            </li>
          </Link>
          <Link to={path.academics.home}>
            <li
              className={classes.li}
              style={{ ...academics, ...active.academics }}
              onMouseEnter={this.handleButtonHover('academics', secondary)}
              onMouseLeave={this.handleButtonHover('academics', primary)}
              onClick={this.handleClick('academics')}
            >
              <Typography className={classes.text}>Academics</Typography>
              <ul className={classes.ul_li_ul} style={academicsList}>
                <Link to={path.academics.studentRegistration}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...studentRegistration,
                      ...active.studentRegistration
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'studentRegistration',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'studentRegistration',
                      primary
                    )}
                    onClick={this.handleClick('studentRegistration')}
                  >
                    <Typography className={classes.text}>
                      Student Registration
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.examinationRegistration}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...examinationRegistration,
                      ...active.examinationRegistration
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'examinationRegistration',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'examinationRegistration',
                      primary
                    )}
                    onClick={this.handleClick('examinationRegistration')}
                  >
                    <Typography className={classes.text}>
                      Examination Registration
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.course}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{ ...course, ...active.course }}
                    onMouseEnter={this.handleButtonHover('course', secondary)}
                    onMouseLeave={this.handleButtonHover('course', primary)}
                    onClick={this.handleClick('course')}
                  >
                    <Typography className={classes.text}>Course</Typography>
                  </li>
                </Link>
                <Link to={path.academics.feeStructure}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{ ...feeStructure, ...active.feeStructure }}
                    onMouseEnter={this.handleButtonHover(
                      'feeStructure',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'feeStructure',
                      primary
                    )}
                    onClick={this.handleClick('feeStructure')}
                  >
                    <Typography className={classes.text}>
                      Fee Structure
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.studentList}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{ ...studentList, ...active.studentList }}
                    onMouseEnter={this.handleButtonHover(
                      'studentList',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'studentList',
                      primary
                    )}
                    onClick={this.handleClick('studentList')}
                  >
                    <Typography className={classes.text}>
                      Student List
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.passingCertificate}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...passingCertificate,
                      ...active.passingCertificate
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'passingCertificate',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'passingCertificate',
                      primary
                    )}
                    onClick={this.handleClick('passingCertificate')}
                  >
                    <Typography className={classes.text}>
                      Passing Certificate
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.academicCenter}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{ ...academicCenter, ...active.academicCenter }}
                    onMouseEnter={this.handleButtonHover(
                      'academicCenter',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'academicCenter',
                      primary
                    )}
                    onClick={this.handleClick('academicCenter')}
                  >
                    <Typography className={classes.text}>
                      Academic Center
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.payOnlineAcademicsFees}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...payOnlineAcademicsFees,
                      ...active.payOnlineAcademicsFees
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'payOnlineAcademicsFees',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'payOnlineAcademicsFees',
                      primary
                    )}
                    onClick={this.handleClick('payOnlineAcademicsFees')}
                  >
                    <Typography className={classes.text}>
                      Pay Online Academic Fees
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.syllabus}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{ ...syllabus, ...active.syllabus }}
                    onMouseEnter={this.handleButtonHover('syllabus', secondary)}
                    onMouseLeave={this.handleButtonHover('syllabus', primary)}
                    onClick={this.handleClick('syllabus')}
                  >
                    <Typography className={classes.text}>Syllabus</Typography>
                  </li>
                </Link>
                <Link to={path.academics.studentAttendance}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...studentAttendance,
                      ...active.studentAttendance
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'studentAttendance',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'studentAttendance',
                      primary
                    )}
                    onClick={this.handleClick('studentAttendance')}
                  >
                    <Typography className={classes.text}>
                      Student Attendance
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.admissionCell}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...admissionCell,
                      ...active.admissionCell
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'admissionCell',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'admissionCell',
                      primary
                    )}
                    onClick={this.handleClick('admissionCell')}
                  >
                    <Typography className={classes.text}>
                      Admission Cell
                    </Typography>
                  </li>
                </Link>
                <Link to={path.academics.feesCollectionCell}>
                  <li
                    className={classes.ul_li_ul_li}
                    style={{
                      ...feesCollectionCell,
                      ...active.feesCollectionCell
                    }}
                    onMouseEnter={this.handleButtonHover(
                      'feesCollectionCell',
                      secondary
                    )}
                    onMouseLeave={this.handleButtonHover(
                      'feesCollectionCell',
                      primary
                    )}
                    onClick={this.handleClick('feesCollectionCell')}
                  >
                    <Typography className={classes.text}>
                      Fees Collection Cell
                    </Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to={path.employees}>
            <li
              className={classes.li}
              style={{ ...employees, ...active.employees }}
              onMouseEnter={this.handleButtonHover('employees', secondary)}
              onMouseLeave={this.handleButtonHover('employees', primary)}
              onClick={this.handleClick('employees')}
            >
              <Typography className={classes.text}>Employees</Typography>
            </li>
          </Link>
          <Link to={path.employments}>
            <li
              className={classes.li}
              style={{ ...employments, ...active.employments }}
              onMouseEnter={this.handleButtonHover('employments', secondary)}
              onMouseLeave={this.handleButtonHover('employments', primary)}
              onClick={this.handleClick('employments')}
            >
              <Typography className={classes.text}>Employments</Typography>
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
