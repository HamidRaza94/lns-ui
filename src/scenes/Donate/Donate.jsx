import React, { Component } from 'react';

import { donate } from '../../cms';
import { FormPage, PersonalDetail, CommunicationDetail, DocumentDetail, PaymentDetail } from '../../components';
import { capitalizeAll } from '../../lib/utils/helpers';
import { connection } from '../../lib/server';
import { API_METHOD, SERVER_ROUTE, RESET_TYPE } from '../../lib/extra/constants';
import { withSnackBar } from '../../contexts';

class Donate extends Component {
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
    // const options = { abortEarly: false }

    if (activeStep === 0) {
      return false;
      // const { personalDetailData } = this.state;
      // return personalDetailSchema.isValidSync({ ...personalDetailData }, options);
    } else if (activeStep === 1) {
      return false;
      // const { communicationDetailData } = this.state;
      // return communicationDetailSchema.isValidSync({ ...communicationDetailData}, options);
    } else if (activeStep === 2) {
      return false;
      // const { documentDetailData } = this.state;
      // return documentDetailSchema.isValidSync({ ...documentDetailData }, options);
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

  getLastStep = () => this.state.activeStep === donate.steps.length - 1 ? true : false;

  render() {
    const { activeStep } = this.state;

    return (
      <FormPage
        formTitle={donate.title}
        steps={donate.steps}
        activeStep={activeStep}
        stepContent={this.getStepContent(activeStep)}
        handleNext={this.handleNext}
        handleBack={this.handleBack}
        stateUpdater={this.state}
      />
    );
  }
}

export default withSnackBar(Donate);
