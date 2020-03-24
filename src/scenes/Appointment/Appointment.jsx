import React, { Component } from 'react';

import { appointment } from '../../cms';
import { API_METHOD, SERVER_ROUTE, RESET_TYPE } from '../../libs/extra/constants';
import { connection } from '../../libs/server';
import { FormPage, PersonalDetail, CommunicationDetail, DocumentDetail, PaymentDetail } from '../../components';
import { capitalizeAll } from '../../libs/utils/helpers';
import { withSnackBarConsumer } from '../../hoc';
import {
  personalDetailSchema,
  communicationDetailSchema,
  documentDetailSchema,
  appointmentSchema,
} from './validation';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      personalDetailData: {
        name: '',
        fatherName: '',
        sex: '',
        maritalStatus: '',
        dateOfBirth: null,
      },
      communicationDetailData: {
        phone: '',
        address: '',
      },
      documentDetailData: {
        aadhaar: '',
        pan: '',
      },
    };
  }

  getStepContent = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalDetail
            onChange={this.handleChange}
            data={this.state.personalDetailData}
            fields={[
              'name',
              'fatherName',
              'sex',
              'maritalStatus',
              'dateOfBirth',
            ]}
          />
        );
      case 1:
        return (
          <CommunicationDetail
            onChange={this.handleChange}
            data={this.state.communicationDetailData}
            fields={[
              'phone',
              'address',
            ]}
          />
        );
      case 2:
        return (
          <DocumentDetail
            onChange={this.handleChange}
            data={this.state.documentDetailData}
            fields={[
              'aadhaar',
              'pan',
            ]}
          />
        );
      case 3:
        return <PaymentDetail />;
      default:
        return 'Something is wrong';
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
      const { personalDetailData } = this.state;
      return personalDetailSchema.isValidSync({ ...personalDetailData }, options);
    } else if (activeStep === 1) {
      const { communicationDetailData } = this.state;
      return communicationDetailSchema.isValidSync({ ...communicationDetailData}, options);
    } else if (activeStep === 2) {
      const { documentDetailData } = this.state;
      return documentDetailSchema.isValidSync({ ...documentDetailData }, options);
    } else if (this.getLastStep()) {
      const { personalDetailData, communicationDetailData, documentDetailData } = this.state;
      return appointmentSchema.isValidSync({
        ...personalDetailData,
        ...communicationDetailData,
        ...documentDetailData,
      }, options);
    } else {
      return false;
    }
  }

  handleNext = () => {
    const isValid = this.handleIsValid();

    if (isValid) {
      if (this.getLastStep()) {
        const { openSnackBar } = this.props;
        const data = new FormData();
        data.append('file', this.state.photo);
        connection(API_METHOD.post, SERVER_ROUTE.appointment, data)
        .then(res => {
          openSnackBar({ variant: 'success', message: res.data.message });
          this.handleReset(RESET_TYPE.all);
        })
        .catch(error => {
          openSnackBar({ variant: 'error', message: error.message });
        });
      } else {
        this.setState(prevState => ({
          activeStep: prevState.activeStep + 1,
        }));
      }
    } else {
      const { openSnackBar } = this.props;
      openSnackBar({ variant: 'error', message: 'Please Fill Required Field' });
    }
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  }

  handleReset = type => {
    if (type === RESET_TYPE.current) {
      const { activeStep } = this.state;

      if (activeStep === 0) {
        this.setState({ personalDetailData: {} });
      } else if (activeStep === 1) {
        this.setState({ communicationDetailData: {} });
      } else if (activeStep === 2) {
        this.setState({ documentDetailData: {} });
      }
    } else if (type === RESET_TYPE.all) {
      this.setState({
        activeStep: 0,
        personalDetailData: {},
        communicationDetailData: {},
        documentDetailData: {},
      });
    }
  }

  getLastStep = () => this.state.activeStep === appointment.steps.length - 1 ? true : false;

  render() {
    const { activeStep } = this.state;

    return (
      <FormPage
        formTitle={appointment.title}
        steps={appointment.steps}
        activeStep={activeStep}
        stepContent={this.getStepContent(activeStep)}
        handleNext={this.handleNext}
        handleBack={this.handleBack}
        stateUpdater={this.state}
      />
    );
  }
}

export default withSnackBarConsumer(Appointment);
