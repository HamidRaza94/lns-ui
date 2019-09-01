import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';

import styles from './style';
import { PaymentDetail } from '../../../components';
import { QontoConnector, QontoStepIcon } from '../../../components/Stepper/Stepper';
import { enrollmentRegistration, form } from '../../../cms';
import { capitalizeAll } from '../../../lib/utils/helpers';
import { PersonalDetail, CommunicationDetail, DocumentDetail } from './component';
import { connection } from '../../../lib/server';
import { API_METHOD, SERVER_ROUTE } from '../../../lib/extra/constants';
import { withSnackBar } from '../../../contexts';

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
        return <PaymentDetail />;
      default:
        return 'Unknown stepIndex';
    }
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: field === 'pan' ? capitalizeAll(value) : value,
    });
  };

  handleNext = () => {
    const { activeStep } = this.state;

    if (activeStep === enrollmentRegistration.steps.length - 1) {
      const { snackBarStateUpdater } = this.props;
      const data = new FormData();
      data.append('file', this.state.photo);
      connection(API_METHOD.post, SERVER_ROUTE.enrollment, data)
      .then(res => {
        snackBarStateUpdater({
          showSnackBar: true,
          variant: 'success',
          snackBarMsg: 'Enrollment Saved Successfully',
        })
      })
      .catch(error => {
        snackBarStateUpdater({
          showSnackBar: true,
          variant: 'error',
          snackBarMsg: 'Enrollment Not Saved',
        })
      });
    } else {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
    }    
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
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

        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {enrollmentRegistration.steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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
              {form.button.back}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
            >
              {activeStep === enrollmentRegistration.steps.length - 1 ? form.button.finish : form.button.next}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

EnrollmentRegistration.propTypes = {
  classes: PropTypes.object.isRequired,
}

EnrollmentRegistration.defaultProps = {
  classes: {},
}

export default withSnackBar(withStyles(styles)(EnrollmentRegistration));
