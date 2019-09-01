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
import {
  personalDetailSchema,
  communicationDetailSchema,
  documentDetailSchema,
  enrollmentRegistrationSchema,
} from './validation';

class EnrollmentRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      personalDetailData: {
        candidateName: '',
        fatherName: '',
        sex: '',
        maritalStatus: '',
        dateOfBirth: '',
        placeOfBirth: '',
        category: '',
        religion: '',
        occupation: '',
        physicalStatus: '',
      },
      communicationDetailData: {
        email: '',
        phone: '',
        policeStation: '',
        state: '',
        pincode: '',
        address: '',
      },
      documentDetailData: {
        aadhaar: '',
        pan: '',
        photo: '',
        sign: '',
      },
    };
  }

  getStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <PersonalDetail onChange={this.handleChange} data={this.state.personalDetailData} />;
      case 1:
        return <CommunicationDetail onChange={this.handleChange} data={this.state.communicationDetailData} />;
      case 2:
        return <DocumentDetail onChange={this.handleChange} data={this.state.documentDetailData} />;
      case 3:
        return <PaymentDetail />;
      default:
        return 'Unknown stepIndex';
    }
  };

  handleChange = (fieldTitle, field, value) => {
    this.setState(prevState => ({
      [fieldTitle]: {
        ...prevState[fieldTitle],
        [field]: field === 'pan' ? capitalizeAll(value) : value,
      }
    }));
  }

  handleIsValid = () => {
    const { activeStep } = this.state;
    const options = { abortEarly: false }

    if (activeStep === 0) {
      return true;
      // const { personalDetailData } = this.state;
      // return personalDetailSchema.isValidSync({ ...personalDetailData }, options);
    } else if (activeStep === 1) {
      return true;
      // const { communicationDetailData } = this.state;
      // return communicationDetailSchema.isValidSync({ ...communicationDetailData}, options);
    } else if (activeStep === 2) {
      const { documentDetailData } = this.state;
      return documentDetailSchema.isValidSync({ ...documentDetailData }, options);
    } else if (activeStep === 3) {
      return false;
    } else if (this.getLastStep()) {
      return false;
      // const { personalDetailData, communicationDetailData, documentDetailData } = this.state;
      // return enrollmentRegistrationSchema.isValidSync({
      //   ...personalDetailData,
      //   ...communicationDetailData,
      //   ...documentDetailData,
      // }, options);
    } else {
      return false;
    }
  }

  handleNext = () => {
    const isValid = this.handleIsValid();

    if (isValid) {
      if (this.getLastStep()) {
        const { snackBarStateUpdater } = this.props;
        const data = new FormData();
        data.append('file', this.state.photo);
        connection(API_METHOD.post, SERVER_ROUTE.enrollment, data)
        .then(res => {
          snackBarStateUpdater({
            showSnackBar: true,
            variant: 'success',
            snackBarMsg: res.data.message,
          })
        })
        .catch(error => {
          snackBarStateUpdater({
            showSnackBar: true,
            variant: 'error',
            snackBarMsg: error.message,
          })
        });
      } else {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1,
        }));
      }
    } else {
      const { snackBarStateUpdater } = this.props;
      snackBarStateUpdater({
        showSnackBar: true,
        variant: 'error',
        snackBarMsg: 'Please Fill Required Field',
      });
    }
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  }

  getLastStep = () => this.state.activeStep === enrollmentRegistration.steps.length - 1 ? true : false;

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
              {this.getLastStep() ? form.button.finish : form.button.next}
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
