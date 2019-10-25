import React, { Component } from 'react';
import { withStyles, Paper, Typography } from '@material-ui/core';

import { grievance } from '../../cms';
import { API_METHOD, SERVER_ROUTE, RESET_TYPE } from '../../libs/extra/constants';
import { FormPage, PersonalDetail, CommunicationDetail, IncidentDetail, DialogBox } from '../../components';
import { SearchGrievance, FormForMember } from './component';
import { capitalizeAll } from '../../libs/utils/helpers';
import { connection } from '../../libs/server';
import { withSnackBar } from '../../contexts';
import {
  personalDetailSchema,
  communicationDetailSchema,
  incidentDetailSchema,
  grievanceSchema,
} from './validation';
import style from './component/FormForMember/style';

class Grievance extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
              'email',
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

  handleSubmitData = () => {
    const { snackBarStateUpdater } = this.props;
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

    connection(API_METHOD.post, SERVER_ROUTE.grievance, payload)
    .then(res => {
      snackBarStateUpdater({
        showSnackBar: true,
        variant: 'success',
        snackBarMsg: res.data.message,
      })
      console.log('response is ', res);
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
      snackBarStateUpdater({
        showSnackBar: true,
        variant: 'error',
        snackBarMsg: error.message,
      })
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

  getLastStep = () => this.state.activeStep === grievance.steps.length - 1 ? true : false;

  handleAgreeDialogBox = () => {
    this.handleReset(RESET_TYPE.all);
  }

  render() {
    const { activeStep, isDialogBoxOpen, response } = this.state;
    const { classes } = this.props;

    return (
      <>
        <Paper className={classes.root}>
          <SearchGrievance snackBarStateUpdater={this.props.snackBarStateUpdater} />
          <FormForMember
            snackBarStateUpdater={this.props.snackBarStateUpdater}
            incidentDetailData={this.state.incidentDetailData}
            onChange={this.handleChange}
            reset={(type) => this.handleReset(type)}
          />
        </Paper>

        <FormPage
          formTitle={grievance.title}
          steps={grievance.steps}
          activeStep={activeStep}
          stepContent={this.getStepContent(activeStep)}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
          stateUpdater={this.state}
        />

        <DialogBox
          open={isDialogBoxOpen}
          title="Lodged Grievance Detail"
          disableDisagreeButton={true}
          agreeButtonLabel='Okay'
          agreeButtonAction={this.handleAgreeDialogBox}
        >
          <Typography>Grievance ID: <b>{response.grievanceId}</b></Typography>
          <Typography>Incident Detail: <b>{response.placeOfIncident}</b></Typography>
          <Typography>Date and Time of Incident: <b>{response.dateTimeIncident}</b></Typography>
          <Typography>Summary: <b>{response.summary}</b></Typography>
          <Typography>Attachment: <b>{response.attachment}</b></Typography>
        </DialogBox>
      </>
    );
  }
}

export default withStyles(style)(withSnackBar(Grievance));
