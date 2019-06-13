import React, { Component } from 'react';
import {
  withStyles,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography
} from '@material-ui/core';

import styles from './style';
import { PersonalDetail } from './component';

const steps = ['Personal Details', 'Incident Detail', 'Witness Detail'];

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalDetail />;
    case 1:
      return 'Incident Detail';
    case 2:
      return 'Witness Detail';
    default:
      return 'Unknown stepIndex';
  }
}

class VolunteerShip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      personalDetail: {
        candidateName: '',
        fatherName: '',
        maritalStatus: '',
        sex: '',
        dateOfBirth: '',
        placeOfBirth: '',
        occupation: '',
        religion: '',
        category: '',
        photo: false,
        sign: false,
        physicalStatus: ''
      },
      communicationDetail: {
        email: '',
        phone: '',
        policeStation: '',
        state: '',
        pincode: '',
        address: ''
      },
      documentDetail: {
        aadhaar: '',
        pan: ''
      }
    };
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
    const classes = this.props;
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div className={classes.content}>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
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
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(VolunteerShip);
