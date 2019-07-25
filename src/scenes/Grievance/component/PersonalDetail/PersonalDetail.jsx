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
  MenuItem,
} from '@material-ui/core';

import {
  PersonalDetailDefaultProps,
  PersonalDetailPropTypes
} from '../../../../lib/utils/props';
import {
  SEX,
  MARITAL_STATUS,
  CATEGORY,
  RELIGION,
  STATES
} from '../../../../cms/constants';
import styles from './style';

class PersonalDetail extends Component {
  handleChange = field => e => {
    this.props.onChange(field, e.target.value);
  }

  render() {
    const {
      classes,
      name,
      fatherName,
      sex,
      maritalStatus,
      email,
      phone,
      dateOfBirth,
      aadhaar,
      category,
      religion,
      address,
      policeStation,
      state,
      pincode,
      // hasErrors,
      // getErrors
    } = this.props;

    return (
      <>
        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="name"
            // error={hasErrors.name}
            // helperText={getErrors.name}
            label="Name"
            value={name}
            margin="dense"
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('name')}
            // onBlur={this.handleValidation('name')}
          />

          <TextField
            id="fatherName"
            // error={hasErrors.fatherName}
            // helperText={getErrors.fatherName}
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
            id="phone"
            // error={hasErrors.phone}
            // helperText={getErrors.phone}
            label="Phone"
            value={phone}
            onChange={this.handleChange('phone')}
            type="number"
            margin="dense"
            className={classes.padding}
            fullWidth
          />

          <TextField
            id="email"
            // error={hasErrors.email}
            // helperText={getErrors.email}
            label="Email"
            type="email"
            name="email"
            value={email}
            margin="dense"
            fullWidth
            onChange={this.handleChange('email')}
          />
        </div>

        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="dateOfBirth"
            // error={hasErrors.dateOfBirth}
            // helperText={getErrors.dateOfBirth}
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

        <TextField
          id="aadhaar"
          // error={hasErrors.aadhaar}
          // helperText={getErrors.aadhaar}
          label="Aadhar"
          value={aadhaar}
          onChange={this.handleChange('aadhaar')}
          type="number"
          fullWidth
        />
        </div>

        <div className={classes.row} style={{ paddingTop: 10 }}>
          <FormControl fullWidth className={classes.padding}>
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

        <TextField
          id="address"
          // error={hasErrors.address}
          // helperText={getErrors.address}
          label="Address"
          multiline
          value={address}
          onChange={this.handleChange('address')}
          margin="dense"
        />

        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="policeStation"
            // error={hasErrors.policeStation}
            // helperText={getErrors.policeStation}
            label="Police Station"
            value={policeStation}
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('policeStation')}
          />

          <FormControl fullWidth className={classes.padding}>
            <InputLabel htmlFor="state-select">State</InputLabel>
            <Select
              value={state}
              onChange={this.handleChange('state')}
              inputProps={{
                name: 'state',
                id: 'state-select'
              }}
            >
              {STATES.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="pincode"
            // error={hasErrors.pincode}
            // helperText={getErrors.pincode}
            label="Pincode"
            value={pincode}
            onChange={this.handleChange('pincode')}
            type="number"
            fullWidth
          />
        </div>
      </>
    );
  }
}

PersonalDetail.defaultProps = PersonalDetailDefaultProps;
PersonalDetail.propTypes = PersonalDetailPropTypes;

export default withStyles(styles)(PersonalDetail);
