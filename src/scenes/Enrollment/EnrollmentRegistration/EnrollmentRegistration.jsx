import React, { Component } from 'react';
import {
  withStyles,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@material-ui/core';

import styles from './style';
import { enrollmentRegistration } from '../../../cms';
import { capitalizeAll } from '../../../lib/utils/helpers';
import { PersonalDetail, CommunicationDetail, DocumentDetail } from './component';

class EnrollmentRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  getStepContent = (activeStep) => {
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
      pan
    } = this.state;

    switch (activeStep) {
      case 0:
        return (
          <PersonalDetail
            onChange={this.handleChange}
            candidateName={candidateName}
            fatherName={fatherName}
            sex={sex}
            maritalStatus={maritalStatus}
            dateOfBirth={dateOfBirth}
            placeOfBirth={placeOfBirth}
            category={category}
            religion={religion}
            occupation={occupation}
            physicalStatus={physicalStatus}
          />
        );
      case 1:
        return (
          <CommunicationDetail
            onChange={this.handleChange}
            email={email}
            phone={phone}
            policeStation={policeStation}
            state={state}
            pincode={pincode}
            address={address}
          />
        );
      case 2:
        return (
          <DocumentDetail
            onChange={this.handleChange}
            aadhaar={aadhaar}
            pan={pan}
          />
        );
      case 3:
        return <></>;
      default:
        return 'Unknown stepIndex';
    }
  };

  handleChange = (field, value) => {
    let data;

    if (field === 'pan') {
      data = capitalizeAll(value);
    } else {
      data = value;
    }

    this.setState({
      [field]: data
    });
  };

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
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          {enrollmentRegistration.title}
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {enrollmentRegistration.steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <div className={classes.form}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {this.getStepContent(activeStep)}
            </div>
          </div>
          <div className={classes.button}>
            <Button
              disabled={activeStep === 0}
              onClick={this.handleBack}
              className={classes.backButton}
            >
              {enrollmentRegistration.backButtonLabel}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
            >
              {activeStep === enrollmentRegistration.steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EnrollmentRegistration);
