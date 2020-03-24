import React, { Component } from 'react';

import { learnerRegistration } from '../../../cms';
import { connection, capitalizeAll, API_METHOD, SERVER_ROUTE, RESET_TYPE } from '../../../libs';
import { withSnackBarConsumer } from '../../../hoc';
import {
  FormPage,
  PersonalDetail,
  CommunicationDetail,
  DocumentDetail,
  AcademicDetail,
  PaymentDetail,
} from '../../../components';
// import {
//   personalDetailSchema,
//   communicationDetailSchema,
//   incidentDetailSchema,
//   grievanceSchema,
// } from './validation';

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
        placeOfBirth: '',
        category: '',
        religion: '',
      },
      communicationDetailData: {
        email: '',
        phone: '',
        state: '',
        pincode: '',
        address: '',
      },
      documentDetailData: {
        aadhaar: '',
        photo: '',
        sign: '',
      },
      academicDetailData: {
        academicCenter: '',
        courseName: '',
        academicShift: '',
      },
      response: {
        grievanceId: '',
        placeOfIncident: '',
        dateTimeIncident: null,
        summary: '',
        attachment: '',
      }
    };
  }

  getStepContent = (activeStep) => {
    const {
      personalDetailData,
      communicationDetailData,
      documentDetailData,
      academicDetailData,
    } = this.state;

    switch (activeStep) {
      case 0:
        return (
          <PersonalDetail
            onChange={this.handleChange}
            data={personalDetailData}
            fields={[
              'name',
              'fatherName',
              'sex',
              'maritalStatus',
              'dateOfBirth',
              'placeOfBirth',
              'category',
              'religion',
            ]}
          />
        );

      case 1:
        return (
          <CommunicationDetail
            onChange={this.handleChange}
            data={communicationDetailData}
            fields={['email', 'phone', 'state', 'pincode', 'address']}
          />
        );

      case 2:
        return (
          <DocumentDetail
            onChange={this.handleChange}
            data={documentDetailData}
            fields={['aadhaar', 'p', 's']}
          />
        );

      case 3:
        return (
          <AcademicDetail
            onChange={this.handleChange}
            data={academicDetailData}
          />
        );
      
      case 4:
        return <PaymentDetail />

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
    return true;
    // const { activeStep } = this.state;
    // const options = { abortEarly: false }

    // if (activeStep === 0) {
    //   const { personalDetailData } = this.state;
    //   return personalDetailSchema.isValidSync({ ...personalDetailData }, options);
    // } else if (activeStep === 1) {
    //   const { communicationDetailData } = this.state;
    //   return communicationDetailSchema.isValidSync({ ...communicationDetailData}, options);
    // } else if (activeStep === 2) {
    //   const { incidentDetailData } = this.state;
    //   return incidentDetailSchema.isValidSync({ ...incidentDetailData }, options);
    // } else {
    //   return false;
    // }
  }

  handleSubmitData = () => {
    const { openSnackBar } = this.props;
    const { personalDetailData, communicationDetailData, incidentDetailData } = this.state;
    let payload = new FormData();

    payload.append('name', personalDetailData.name);
    payload.append('fatherName', personalDetailData.fatherName);
    payload.append('sex', personalDetailData.sex);
    payload.append('maritalStatus', personalDetailData.maritalStatus);
    payload.append('dateOfBirth', personalDetailData.dateOfBirth);
    payload.append('religion', personalDetailData.religion);
    payload.append('category', personalDetailData.category);

    payload.append('email', communicationDetailData.email);
    payload.append('phone', communicationDetailData.phone);
    payload.append('address', communicationDetailData.address);
    payload.append('policeStation', communicationDetailData.policeStation);
    payload.append('state', communicationDetailData.state);
    payload.append('pincode', communicationDetailData.pincode);

    payload.append('placeOfIncident', incidentDetailData.placeOfIncident);
    payload.append('dateTimeIncident', incidentDetailData.dateTimeIncident);
    payload.append('summary', incidentDetailData.summary);
    payload.append('attachment', incidentDetailData.attachment);

    connection(API_METHOD.post, SERVER_ROUTE.learnerRegistration, {})
    .then(res => {
      openSnackBar({ variant: 'success', message: res.data.message });
      this.setState({
        isDialogBoxOpen: true,
        response: {
          grievanceId: res.data.data.originalId,
          placeOfIncident: res.data.data.placeOfIncident,
          dateTimeIncident: res.data.data.dateTimeIncident,
          summary: res.data.data.summary,
          // attachment: res.data.data.attachment,
        }
      });
      // this.handleReset(RESET_TYPE.all);
    })
    .catch(error => {
      openSnackBar({ variant: 'error', message: error.message });
    });
  }

  handleNext = () => {
    const isValid = this.handleIsValid();

    if (isValid) {
      if (this.getLastStep()) {
        this.handleSubmitData();
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
        isDialogBoxOpen: false,
        personalDetailData: {
          name: '',
          fatherName: '',
          sex: '',
          maritalStatus: '',
          dateOfBirth: null,
          religion: '',
          category: '',
        },
        communicationDetailData: {
          email: '',
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
      });
    }
  }

  getLastStep = () => this.state.activeStep === learnerRegistration.steps.length - 1 ? true : false;

  render() {
    const { activeStep } = this.state;

    return (
      <FormPage
        formTitle={learnerRegistration.title}
        steps={learnerRegistration.steps}
        activeStep={activeStep}
        stepContent={this.getStepContent(activeStep)}
        handleNext={this.handleNext}
        handleBack={this.handleBack}
        stateUpdater={this.state}
      />
    );
  }
}

export default withSnackBarConsumer(Grievance);
