import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  withStyles,
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import styles from './style';
import { personalDetail } from '../../../cms';
import {
  SEX,
  MARITAL_STATUS,
  CATEGORY,
  RELIGION,
  PHYSICAL_STATUS,
  STATES,
} from '../../../lib/extra/constants';

class PersonalDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: true,
      fatherName: true,
      sex: true,
      maritalStatus: true,
      dateOfBirth: true,
      placeOfBirth: true,
      religion: true,
      category: true,
      occupation: true,
      physicalStatus: true,
    }
  }

  static getDerivedStateFromProps({ fields }) {
    if (fields && fields.length) {
      const whichOneIsExist = {
        name: false,
        fatherName: false,
        sex: false,
        maritalStatus: false,
        dateOfBirth: false,
        placeOfBirth: false,
        religion: false,
        category: false,
        occupation: false,
        physicalStatus: false,
      }

      fields.forEach((field) => {
        whichOneIsExist[field] = true;
      });

      return whichOneIsExist;
    }
  }

  handleDateChange = field => date => {
    this.props.onChange('personalDetailData', field, date);
  }
  handleChange = field => e => {
    this.props.onChange('personalDetailData', field, e.target.value);
  }

  render() {
    const {
      name,
      fatherName,
      sex,
      maritalStatus,
      dateOfBirth,
      placeOfBirth,
      religion,
      category,
      occupation,
      physicalStatus,
    } = this.state;
    const { classes, data } = this.props;

    return (
      <div className={classes.root}>
        {name && (
          <TextField
            id="name"
            label={personalDetail.name.label}
            value={data.name}
            margin="dense"
            fullWidth
            onChange={this.handleChange('name')}
            className={classes.field}
          />
        )}

        {fatherName && (
          <TextField
            id="fatherName"
            label={personalDetail.fatherName.label}
            value={data.fatherName}
            margin="dense"
            fullWidth
            onChange={this.handleChange('fatherName')}
            className={classes.field}
          />
        )}

        {sex && (
          <FormControl component="fieldset" className={classes.radioField}>
            <FormLabel component="legend" className={classes.radioFieldLabel}>
              {personalDetail.sex.label}
            </FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              value={data.sex}
              onChange={this.handleChange('sex')}
              row
            >
              {SEX.map(item => (
                <FormControlLabel
                  value={item}
                  control={<Radio color="primary" />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}

        {maritalStatus && (
          <FormControl component="fieldset" className={classes.radioField}>
            <FormLabel component="legend"  className={classes.radioFieldLabel}>
              {personalDetail.maritalStatus.label}
            </FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              value={data.maritalStatus}
              onChange={this.handleChange('maritalStatus')}
              row
            >
              {MARITAL_STATUS.map(item => (
                <FormControlLabel
                  value={item}
                  control={<Radio color="primary" />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}

        {dateOfBirth && (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              label={personalDetail.dateOfBirth.label}
              value={data.dateOfBirth}
              openTo="year"
              format="dd/MM/yyyy"
              disableFuture
              clearable
              fullWidth
              onChange={this.handleDateChange('dateOfBirth')}
              className={classes.field}
            />
          </MuiPickersUtilsProvider>
        )}

        {placeOfBirth && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="placeOfBirth-select">
              {personalDetail.placeOfBirth.label}
            </InputLabel>
            <Select
              value={data.placeOfBirth}
              onChange={this.handleChange('placeOfBirth')}
              inputProps={{
                name: 'placeOfBirth',
                id: 'placeOfBirth-select'
              }}
            >
              {STATES.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {religion && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="religion-select">{personalDetail.religion.label}</InputLabel>
            <Select
              value={data.religion}
              onChange={this.handleChange('religion')}
              inputProps={{
                name: 'religion',
                id: 'religion-select'
              }}
            >
              {RELIGION.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {category && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="category-select">{personalDetail.category.label}</InputLabel>
            <Select
              value={data.category}
              onChange={this.handleChange('category')}
              inputProps={{
                name: 'category',
                id: 'category-select'
              }}
            >
              {CATEGORY.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {occupation && (
          <TextField
            id="occupation"
            label={personalDetail.occupation.label}
            value={data.occupation}
            fullWidth
            className={classes.field}
            onChange={this.handleChange('occupation')}
          />
        )}

        {physicalStatus && (
          <FormControl fullWidth className={classes.field}>
            <InputLabel htmlFor="physicalStatus-select">
              {personalDetail.physicalStatus.label}
            </InputLabel>
            <Select
              value={data.physicalStatus}
              onChange={this.handleChange('physicalStatus')}
              inputProps={{
                name: 'physicalStatus',
                id: 'physicalStatus-select'
              }}
            >
              {PHYSICAL_STATUS.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
    );
  }
}

PersonalDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  fatherName: PropTypes.string,
  sex: PropTypes.string,
  maritalStatus: PropTypes.string,
  dateOfBirth: PropTypes.string,
  placeOfBirth: PropTypes.string,
  category: PropTypes.string,
  religion: PropTypes.string,
  occupation: PropTypes.string,
  physicalStatus: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string),
}

PersonalDetail.defaultProps = {
  classes: {},
}

export default withStyles(styles)(PersonalDetail);
