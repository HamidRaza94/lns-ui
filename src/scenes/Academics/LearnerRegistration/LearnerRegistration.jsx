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
// import { steps } from '../../cms/volunteerShip';
import { capitalizeAll } from '../../../libs/utils/helpers';
import { PersonalDetail, CommunicationDetail, DocumentDetail, AcademicDetail } from './component';

const steps = [
  'Personal Details',
  'Communication Detail',
  'Document Detail',
  'Photo and Sign',
  'Academic Detail',
  'Payment'
];

class LearnerRegistration extends Component {
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
      category: '',
      religion: '',
      aadhaar: '',
      email: '',
      phone: '',
      state: '',
      pincode: '',
      address: '',
      academicCenter: '',
      courseName: '',
      academicShift: '',
    };
  }

  componentDidUpdate = () => {
    console.log(this.state);
  };

  getStepContent = (activeStep) => {
    const {
      candidateName,
      fatherName,
      sex,
      maritalStatus,
      dateOfBirth,
      placeOfBirth,
      category,
      religion,
      aadhaar,
      email,
      phone,
      state,
      pincode,
      address,
      academicCenter,
      courseName,
      academicShift,
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
          />
        );
      case 1:
        return (
          <CommunicationDetail
            onChange={this.handleChange}
            email={email}
            phone={phone}
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
          />
        );
      case 3:
        return <></>
      case 4:
        return (
          <AcademicDetail
            onChange={this.handleChange}
            academicCenter={academicCenter}
            courseName={courseName}
            academicShift={academicShift}
          />
        );
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
          Learner Registration Form
        </Typography>
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
              {this.getStepContent(activeStep)}
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

export default withStyles(styles)(LearnerRegistration);
