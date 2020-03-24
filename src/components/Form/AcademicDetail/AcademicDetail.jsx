import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import styles from '../style';
import { academicDetail, centers, courses } from '../../../cms';
import { TIME_SHIFT } from '../../../libs/extra/constants';

class AcademicDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      academicCenter: true,
      courseName: true,
      academicShift: true,
    }
  }

  static getDerivedStateFromProps({ fields }) {
    if (fields && fields.length) {
      const whichOneIsExist = {
        academicCenter: false,
        courseName: false,
        academicShift: false,
      }

      fields.forEach((field) => {
        whichOneIsExist[field] = true;
      });

      return whichOneIsExist;
    }
  }

  handleChange = field => e => {
    this.props.onChange('academicDetailData', field, e.target.value);
  }

  render() {
    const {
      academicCenter,
      courseName,
      academicShift,
    } = this.state;
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        {academicCenter && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="academic-center-select">
              {academicDetail.academicCenter.label}
            </InputLabel>
            <Select
              value={data.academicCenter}
              onChange={this.handleChange('academicCenter')}
              inputProps={{
                name: 'academic-center',
                id: 'academic-center-select'
              }}
            >
              {centers.map(center => (
                <MenuItem key={center.code} value={center.name}>{center.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {courseName && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="course-name-select">
              {academicDetail.courseName.label}
            </InputLabel>
            <Select
              value={data.courseName}
              onChange={this.handleChange('courseName')}
              inputProps={{
                name: 'course-name',
                id: 'course-name-select'
              }}
            >
              {courses.map(course => (
                <MenuItem key={course.code} value={course.name}>{course.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {academicShift && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="academic-shift-select">
              {academicDetail.academicShift.label}
            </InputLabel>
            <Select
              value={data.academicShift}
              onChange={this.handleChange('academicShift')}
              inputProps={{
                name: 'academic-shift',
                id: 'academic-shift-select'
              }}
            >
              {TIME_SHIFT.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
    );
  }
}

AcademicDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string),
  academicCenter: PropTypes.string,
  courseName: PropTypes.string,
  academicShift: PropTypes.string,
}

AcademicDetail.defaultProps = {
  classes: {},
}

export default withStyles(styles)(AcademicDetail);
