import React, { Component } from 'react';
import {
  withStyles,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

import styles from './style';
import { SEX, MARITAL_STATUS, CATEGORY, RELIGION, PHYSICAL_STATUS, STATES } from '../../cms/constants';
import { capitalizeAll } from '../../lib/utils/helpers'
class VolunteerShip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: ['Personal Details', 'Communication Detail', 'Document Detail', 'Photo and Sign', 'Payment'],
      activeStep: 0,
      candidateName: '',
      fatherName: '',
      sex: '',
      maritalStatus: '',
      dateOfBirth: '',
      placeOfBirth: '',
      occupation: '',
      category: '',
      religion: '',
      physicalStatus: '',
      email: '',
      phone: '',
      policeStation: '',
      state: '',
      pincode: '',
      address: '',
      photo: '',
      sign: '',
      aadhaar: '',
      pan: ''
    };
  }

  componentDidUpdate = () => {
    console.log(this.state)
  }

  getStepContent = (activeStep, classes) => {
    const {
      candidateName,
      fatherName,
      sex,
      maritalStatus,
      dateOfBirth,
      placeOfBirth,
      occupation,
      category,
      religion,
      physicalStatus,
      email,
      phone,
      policeStation,
      state,
      pincode,
      address,
      aadhaar,
      pan,
    } = this.state;

    switch (activeStep) {
      case 0:
        return (
          <>
            <div className={classes.row}>
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

            <FormControl component="fieldset">
              <FormLabel component="legend">Sex</FormLabel>
              <RadioGroup aria-label="position" name="position" value={sex} onChange={this.handleChange('sex')} row>
                {SEX.map((item) => (
                  <FormControlLabel
                    value={item}
                    control={<Radio color="primary" />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend">Marital Status</FormLabel>
              <RadioGroup aria-label="position" name="position" value={maritalStatus} onChange={this.handleChange('maritalStatus')} row>
                {MARITAL_STATUS.map((item) => (
                  <FormControlLabel
                    value={item}
                    control={<Radio color="primary" />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <div className={classes.row}>
              <TextField
                id="dateOfBirth"
                label="Date Of Birth"
                value={dateOfBirth}
                type="date"
                fullWidth
                className={classes.padding}
                onChange={this.handleChange('dateOfBirth')}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <FormControl fullWidth>
                <InputLabel htmlFor="placeOfBirth-select">Place Of Birth</InputLabel>
                <Select
                  value={placeOfBirth}
                  onChange={this.handleChange('placeOfBirth')}
                  inputProps={{
                    name: 'placeOfBirth',
                    id: 'placeOfBirth-select',
                  }}
                >
                  {STATES.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={classes.row}>
              <FormControl fullWidth className={classes.padding}>
                <InputLabel htmlFor="category-select">Category</InputLabel>
                <Select
                  value={category}
                  onChange={this.handleChange('category')}
                  inputProps={{
                    name: 'category',
                    id: 'category-select',
                  }}
                >
                  {CATEGORY.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="religion-select">Religion</InputLabel>
                <Select
                  value={religion}
                  onChange={this.handleChange('religion')}
                  inputProps={{
                    name: 'religion',
                    id: 'religion-select',
                  }}
                >
                  {RELIGION.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className={classes.row}>
              <TextField
                id="occupation"
                label="Occupation"
                value={occupation}
                margin="dense"
                fullWidth
                className={classes.padding}
                onChange={this.handleChange('occupation')}
              />

              <FormControl fullWidth>
              <InputLabel htmlFor="physicalStatus-select">Physical Status</InputLabel>
                <Select
                  value={physicalStatus}
                  onChange={this.handleChange('physicalStatus')}
                  inputProps={{
                    name: 'physicalStatus',
                    id: 'physicalStatus-select',
                  }}
                >
                  {PHYSICAL_STATUS.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <TextField
              id="email"
              label="Email"
              type="email"
              name="email"
              value={email}
              margin="dense"
              onChange={this.handleChange('email')}
            />

            <TextField
              id="phone"
              label="Phone"
              value={phone}
              onChange={this.handleChange('phone')}
              type="number"
              margin="dense"
            />

            <TextField
              id="policeStation"
              label="Police Station"
              value={policeStation}
              margin="dense"
              onChange={this.handleChange('policeStation')}
            />

            <FormControl>
              <InputLabel htmlFor="state-select">State</InputLabel>
              <Select
                value={state}
                onChange={this.handleChange('state')}
                inputProps={{
                  name: 'state',
                  id: 'state-select',
                }}
              >
                {STATES.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="pincode"
              label="Pincode"
              value={pincode}
              onChange={this.handleChange('pincode')}
              type="number"
              margin="dense"
            />

            <TextField
              id="address"
              label="Address"
              multiline
              value={address}
              onChange={this.handleChange('address')}
              margin="dense"
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              id="aadhaar"
              label="Aadhar"
              value={aadhaar}
              onChange={this.handleChange('aadhaar')}
              type="number"
              margin="dense"
            />

            <TextField
              id="pan"
              label="PAN"
              value={pan}
              margin="dense"
              onChange={this.handleChange('pan')}
            />
          </>
        );
      case 3:
        return (
          <>
          </>
        );
      default:
        return 'Unknown stepIndex';
    }
  }

  handleChange = field => (event) => {
    let data;

    if (field === 'pan') {
      data = capitalizeAll(event.target.value);
    } else {
      data = event.target.value;
    }

    this.setState({
      [field]: data
    });
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { steps, activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center">Volunteer Ship Form</Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <div className={classes.form}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {this.getStepContent(activeStep, classes)}
            </div>
          </div>
          <div className={classes.button}>
            <Button
              disabled={activeStep === 0}
              onClick={this.handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(VolunteerShip);
