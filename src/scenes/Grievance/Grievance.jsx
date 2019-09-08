import React, { Component } from 'react';

import { grievance } from '../../cms';
import { API_METHOD, SERVER_ROUTE, RESET_TYPE } from '../../lib/extra/constants';
import { FormPage, PersonalDetail, CommunicationDetail, IncidentDetail } from '../../components';
import { capitalizeAll } from '../../lib/utils/helpers';
import { connection } from '../../lib/server';
import { withSnackBar } from '../../contexts';
import {
  personalDetailSchema,
  communicationDetailSchema,
  incidentDetailSchema,
} from './validation';

class Grievance extends Component {
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
        aadhaar: '',
        religion: '',
        category: '',
      },
      communicationDetailData: {
        phone: '',
        address: '',
        policeStation: '',
        state: '',
        pincode: '',
      },
      incidentDetailData: {
        placeOfIncident: '',
        dateTimeIncident: null,
        summary: '',
        attachment: '',
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
              'aadhaar',
              'religion',
              'category',
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
              'policeStation',
              'state',
              'pincode',
            ]}
          />
        );

      case 2:
        return (
          <IncidentDetail
            onChange={this.handleChange}
            data={this.state.incidentDetailData}
          />
        );

      default:
        return 'Something is wrong';
    }
  }

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
      const { incidentDetailData } = this.state;
      return incidentDetailSchema.isValidSync({ ...incidentDetailData }, options);
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
          this.handleReset(RESET_TYPE.all);
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

  getLastStep = () => this.state.activeStep === grievance.steps.length - 1 ? true : false;

  render() {
    const { activeStep } = this.state;

    return (
      <FormPage
        formTitle={grievance.title}
        steps={grievance.steps}
        activeStep={activeStep}
        stepContent={this.getStepContent(activeStep)}
        handleNext={this.handleNext}
        handleBack={this.handleBack}
        stateUpdater={this.state}
      />
    );
  }
}

export default withSnackBar(Grievance);
