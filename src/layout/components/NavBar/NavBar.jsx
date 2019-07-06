import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import _ from 'lodash';
import classNames from 'classnames';

import styles from './style';
import { routes } from '../../../cms';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNav: '',
      activeNavList: '',
    };
  }

  componentDidMount = () => {
    let nav = _.camelCase(
      window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    );

    if (nav === '') nav = 'home';
    this.handleNavClick(nav)();
  };

  handleNavClick = nav => () => {
    this.setState({activeNav: nav});
  }

  handleNavHover = navList => () => {
    this.setState({activeNavList: navList});
  }

  getActiveNavStyle = nav => {
    const { classes } = this.props;
    const { activeNav } = this.state;
    
    if (activeNav === nav) {
      return classes.active;
    }

    return '';
  }

  getActiveNavListStyle = navList => {
    const { classes } = this.props;
    const { activeNavList } = this.state;

    if (activeNavList === navList) {
      return classes.showList;
    }

    return classes.hideList;
  }

  render() {
    const { classes } = this.props;
    const { path } = routes;

    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <Link to={path.home}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('home'))}
              onClick={this.handleNavClick('home')}
            >
              <Typography className={classes.text}>Home</Typography>
            </li>
          </Link>
          <Link to={path.board.home}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('boardList'))}
              onClick={this.handleNavClick('boardList')}
              onMouseEnter={this.handleNavHover('boardList')}
              onMouseLeave={this.handleNavHover('')}
            >
              <Typography className={classes.text}>All Boards</Typography>
              <ul className={classNames(classes.ul_li_ul, this.getActiveNavListStyle('boardList'))}>
                <Link to={path.board.central.home}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('centralBoard'))}>
                    <Typography className={classes.text}>Central Governing Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.central.protector}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('centralProtectorBoard'))}>
                    <Typography className={classes.text}>Central Protector Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.central.advisory}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('centralAdvisoryBoard'))}>
                    <Typography className={classes.text}>Central Advisory Section</Typography>
                  </li>
                </Link>
                <Link to={path.board.central.section}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('centralSectionBoard'))}>
                    <Typography className={classes.text}>Central Board of Section</Typography>
                  </li>
                </Link>
                <Link to={path.board.central.staffSelection}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('centralStaffSelectionBoard'))}>
                    <Typography className={classes.text}>Central Staff Selection Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.central.disciplinary}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('centralDisciplinaryBoard'))}>
                    <Typography className={classes.text}>Central Disciplinary Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.state.home}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('stateBoard'))}>
                    <Typography className={classes.text}>State Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.state.advisory}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('stateAdvisoryBoard'))}>
                    <Typography className={classes.text}>State Advisory Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.state.section}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('stateSectionBoard'))}>
                    <Typography className={classes.text}>State Board of Section</Typography>
                  </li>
                </Link>
                <Link to={path.board.state.staffSelection}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('stateStaffSelectionBoard'))}>
                    <Typography className={classes.text}>State Staff Selection Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.state.disciplinary}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('stateDisciplinaryBoard'))}>
                    <Typography className={classes.text}>State Disciplinary Board</Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to={path.enrolled.home}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('enrolledList'))}
              onClick={this.handleNavClick('enrolledList')}
              onMouseEnter={this.handleNavHover('enrolledList')}
              onMouseLeave={this.handleNavHover('')}
            >
              <Typography className={classes.text}>Enrolled</Typography>
              <ul className={classNames(classes.ul_li_ul, this.getActiveNavListStyle('enrolledList'))}>
                <Link to={path.enrolled.enrollmentVerification}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('enrollmentVerification'))}>
                    <Typography className={classes.text}>Enrollment Verification</Typography>
                  </li>
                </Link>
                <Link to={path.enrolled.applyEnrollment}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('enrollment'))}>
                    <Typography className={classes.text}>Apply for Enrollment</Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to={path.grievance.home}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('grievanceList'))}
              onClick={this.handleNavClick('grievanceList')}
              onMouseEnter={this.handleNavHover('grievanceList')}
              onMouseLeave={this.handleNavHover('')}
            >
              <Typography className={classes.text}>Public Grievance</Typography>
              <ul className={classNames(classes.ul_li_ul, this.getActiveNavListStyle('grievanceList'))}>
                <Link to={path.grievance.home}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('grievance'))}>
                    <Typography className={classes.text}>Regd. Grievance in LNSPJI</Typography>
                  </li>
                </Link>
                <Link>
                  <li
                    className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('grievanceCPGRAMS'))}
                    onClick={() => {window.open(path.grievance.cpgrams, '_blank')}}
                  >
                    <Typography className={classes.text}>Regd. Grievance in CPGRAMS</Typography>
                  </li>
                </Link>
                <Link to={path.grievance.fir}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('fir'))}>
                    <Typography className={classes.text}>Online FIR (All State in India)</Typography>
                  </li>
                </Link>
                <Link to={path.grievance.lostReport}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('lostReport'))}>
                    <Typography className={classes.text}>Online Lost Report (All State in India)</Typography>
                  </li>
                </Link>
                <Link to={path.grievance.lostReport}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('lostReport'))}>
                    <Typography className={classes.text}>Regd. in any commission</Typography>
                  </li>
                </Link>
                <Link to={path.grievance.lostReport}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('lostReport'))}>
                    <Typography className={classes.text}>Regd. in Chief Minister Office All India</Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to={path.donate}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('donate'))}
              onClick={this.handleNavClick('donate')}
            >
              <Typography className={classes.text}>Donate</Typography>
            </li>
          </Link>
          <Link to={path.appointment}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('appointment'))}
              onClick={this.handleNavClick('appointment')}
            >
              <Typography className={classes.text}>Appointment</Typography>
            </li>
          </Link>
          <Link to={path.academics.home}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('academicsList'))}
              onClick={this.handleNavClick('academicsList')}
              onMouseEnter={this.handleNavHover('academicsList')}
              onMouseLeave={this.handleNavHover('')}
            >
              <Typography className={classes.text}>Academics</Typography>
              <ul className={classNames(classes.ul_li_ul, this.getActiveNavListStyle('academicsList'))}>
                <Link to={path.academics.studentRegistration}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('studentRegistration'))}>
                    <Typography className={classes.text}>Student Registration</Typography>
                  </li>
                </Link>
                <Link to={path.academics.examinationRegistration}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('examinationRegistration'))}>
                    <Typography className={classes.text}>Examination Registration</Typography>
                  </li>
                </Link>
                <Link to={path.academics.course}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('course'))}>
                    <Typography className={classes.text}>Course</Typography>
                  </li>
                </Link>
                <Link to={path.academics.feeStructure}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('feeStructure'))}>
                    <Typography className={classes.text}>Fee Structure</Typography>
                  </li>
                </Link>
                <Link to={path.academics.studentList}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('studentList'))}>
                    <Typography className={classes.text}>Student List</Typography>
                  </li>
                </Link>
                <Link to={path.academics.passingCertificate}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('passingCertificate'))}>
                    <Typography className={classes.text}>Passing Certificate</Typography>
                  </li>
                </Link>
                <Link to={path.academics.academicCenter}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('academicCenter'))}>
                    <Typography className={classes.text}>Academic Center</Typography>
                  </li>
                </Link>
                <Link to={path.academics.payOnlineAcademicsFees}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('payOnlineAcademicsFees'))}>
                    <Typography className={classes.text}>Pay Online Academics Fees</Typography>
                  </li>
                </Link>
                <Link to={path.academics.syllabus}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('syllabus'))}>
                    <Typography className={classes.text}>Syllabus</Typography>
                  </li>
                </Link>
                <Link to={path.academics.admissionCell}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('admissionCell'))}>
                    <Typography className={classes.text}>Admission Cell</Typography>
                  </li>
                </Link>
                <Link to={path.academics.feesCollectionCell}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('feesCollectionCell'))}>
                    <Typography className={classes.text}>Fees Collection Cell</Typography>
                  </li>
                </Link>
                <Link to={path.academics.examinationCell}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('examinationCell'))}>
                    <Typography className={classes.text}>Examination Cell</Typography>
                  </li>
                </Link>
                <Link to={path.academics.academicsCell}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('academicsCell'))}>
                    <Typography className={classes.text}>Academics Cell</Typography>
                  </li>
                </Link>
                <Link to={path.academics.placementCell}>
                  <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle('placementCell'))}>
                    <Typography className={classes.text}>Placement Cell</Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link to={path.employees}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('employees'))}
              onClick={this.handleNavClick('employees')}
            >
              <Typography className={classes.text}>Employees</Typography>
            </li>
          </Link>
          <Link to={path.employments}>
            <li
              className={classNames(classes.li, this.getActiveNavStyle('employments'))}
              onClick={this.handleNavClick('employments')}
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
