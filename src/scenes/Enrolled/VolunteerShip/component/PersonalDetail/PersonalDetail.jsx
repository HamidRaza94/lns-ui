import React, { Component } from 'react';
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
  MenuItem
} from '@material-ui/core';

import {
  PersonalDetailDefaultProps,
  PersonalDetailPropTypes
} from '../../../../../lib/utils/props';
import {
  SEX,
  MARITAL_STATUS,
  CATEGORY,
  RELIGION,
  PHYSICAL_STATUS,
  STATES
} from '../../../../../cms/constants';
import styles from './style';

class PersonalDetail extends Component {
  handleChange = field => e => {
    this.props.onChange(field, e.target.value);
  }

  render() {
    const {
      classes,
      candidateName,
      fatherName,
      sex,
      maritalStatus,
      dateOfBirth,
      placeOfBirth,
      category,
      religion,
      occupation,
      physicalStatus,
    } = this.props;

    return (
      <>
        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="candidateName"
            label="Candidate Name"
            value={candidateName}
            margin="dense"
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('candidateName')}
          />

          <TextField
            id="fatherName"
            label="Father Name"
            value={fatherName}
            margin="dense"
            fullWidth
            onChange={this.handleChange('fatherName')}
          />
        </div>

        <FormControl component="fieldset" style={{ padding: '10px 0px' }}>
          <FormLabel component="legend">Sex</FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={sex}
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

        <FormControl component="fieldset" style={{ padding: '10px 0px' }}>
          <FormLabel component="legend">Marital Status</FormLabel>
          <RadioGroup
            aria-label="position"
            name="position"
            value={maritalStatus}
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

        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="dateOfBirth"
            label="Date Of Birth"
            value={dateOfBirth}
            type="date"
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('dateOfBirth')}
            InputLabelProps={{
              shrink: true
            }}
          />

          <FormControl fullWidth>
            <InputLabel htmlFor="placeOfBirth-select">
              Place Of Birth
            </InputLabel>
            <Select
              value={placeOfBirth}
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
        </div>

        <div className={classes.row}>
          <FormControl fullWidth className={classes.padding}  style={{ paddingTop: 10 }}>
            <InputLabel htmlFor="religion-select">Religion</InputLabel>
            <Select
              value={religion}
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

          <FormControl fullWidth>
            <InputLabel htmlFor="category-select">Category</InputLabel>
            <Select
              value={category}
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
        </div>

        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="occupation"
            label="Occupation"
            value={occupation}
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('occupation')}
          />

          <FormControl fullWidth>
            <InputLabel htmlFor="physicalStatus-select">
              Physical Status
            </InputLabel>
            <Select
              value={physicalStatus}
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
        </div>
      </>
    );
  }
}

PersonalDetail.defaultProps = PersonalDetailDefaultProps;
PersonalDetail.propTypes = PersonalDetailPropTypes;

export default withStyles(styles)(PersonalDetail);
