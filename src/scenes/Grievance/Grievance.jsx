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
import { PersonalDetail, IncidentDetail } from './component';
import { steps } from '../../cms/grievance';
import { capitalizeAll } from '../../lib/utils/helpers';
import { connection } from '../../lib/server';
import { personalDetailSchema, incidentDetailSchema } from './validation';

class Grievance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      name: '',
      fatherName: '',
      sex: '',
      maritalStatus: '',
      dateOfBirth: '',
      aadhaar: '',
      religion: '',
      category: '',
      address: '',
      phone: '',
      policeStation: '',
      state: '',
      pincode: '',
      placeOfIncident: '',
      dateTimeIncident: '',
      summary: '',
      errors: {},
    };
  }

  getStepContent = (activeStep) => {
    const {
      name,
      fatherName,
      sex,
      maritalStatus,
      dateOfBirth,
      aadhaar,
      religion,
      category,
      address,
      email,
      phone,
      policeStation,
      state,
      pincode,
      placeOfIncident,
      dateTimeIncident,
      summary,
    } = this.state;

    switch (activeStep) {
      case 0:
        return (
          <PersonalDetail
            onChange={this.handleChange}
            name={name}
            fatherName={fatherName}
            sex={sex}
            maritalStatus={maritalStatus}
            email={email}
            phone={phone}
            dateOfBirth={dateOfBirth}
            category={category}
            religion={religion}
            aadhaar={aadhaar}
            address={address}
            policeStation={policeStation}
            state={state}
            pincode={pincode}
          />
        );

      case 1:
        return (
          <IncidentDetail
            onChange={this.handleChange}
            placeOfIncident={placeOfIncident}
            dateTimeIncident={dateTimeIncident}
            summary={summary}
          />
        );

      default:
        return 'Something is wrong';
    }
  };

  handleSubmitData = async () => {
    const {
      name,
      fatherName,
      sex,
      maritalStatus,
      dateOfBirth,
      aadhaar,
      religion,
      category,
      address,
      email,
      phone,
      policeStation,
      state,
      pincode,
      placeOfIncident,
      dateTimeIncident,
      summary,
    } = this.state;

    const data = {
      name,
      fatherName,
      sex,
      maritalStatus,
      dateOfBirth,
      aadhaar,
      religion,
      category,
      address,
      email,
      phone,
      policeStation,
      state,
      pincode,
      placeOfIncident,
      dateTimeIncident,
      summary,
    };

    const response = await connection('post', 'grievance', data);
    console.log(response);
    alert(response.data.message);
  }

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
  }

  handleErrors = (field, errorMsg) => {
    this.setState(prevState => ({
      ...prevState,
      errors: {
        [field]: errorMsg,
      },
    }));
  }

  handleIsValid = () => {
    const { activeStep } = this.state;

    const options = {
      abortEarly: false,
    };

    if (activeStep === 0) {
      const {
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
      } = this.state;

      const value = {
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
      }
  
      return personalDetailSchema.isValidSync(value, options);
    }

    if (activeStep === 1) {
      const {
        placeOfIncident,
        dateTimeIncident,
        summary,
      } = this.state;

      const value = {
        placeOfIncident,
        dateTimeIncident,
        summary,
      }
  
      return incidentDetailSchema.isValidSync(value, options);
    }
  }

  handleValidation = () => {
    const { activeStep } = this.state;

    if (activeStep === 0) {
      const {
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
      } = this.state;

      if (!name.length) {
        alert('Check Name');
      }
    }
  }

  handleNext = (activeButton) => () => {
    if (activeButton === 'Submit') {
      this.handleSubmitData();
    } else {
      const isValid = this.handleValidation();
      if (isValid) {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1
        }));
      } else {
        alert('Please Check Detail');
      }
    }
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const activeButtonText = (activeStep === steps.length - 1 ? 'Submit' : 'Next');

    return (
      <div className={classes.root}>
        <Typography variant="h4" align="center">
          Public Grievance Form
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
              onClick={this.handleNext(activeButtonText)}
            >
              {activeButtonText}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Grievance);
