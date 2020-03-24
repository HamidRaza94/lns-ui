import React, { Component } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
// import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  withStyles,
  // Paper,
  TextField,
  Button,
  Fab,
  Typography,
} from '@material-ui/core';

import style from './style';
import { DialogBox, IncidentDetail } from '../../../../components';
import { connection } from '../../../../libs/server';
import { API_METHOD, SERVER_ROUTE, SNACKBAR_VARIANTS, RESET_TYPE } from '../../../../libs/extra/constants';
import { incidentDetailSchema } from '../../validation';

const [successVariant, errorVariant] = SNACKBAR_VARIANTS;

class FormForMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'none',
      isMember: false,
      isDialogBoxOpen: false,
      enrollmentId: '',
      enrollmentName: '',
      dialogBoxTitle: 'Grievance Form',
      grievanceId: '',
    }
  }

  // componentDidUpdate = () => {
  //   console.log('state222 >', this.state);
  // }

  handleOpenSearchDialogBox = () => {
    this.setState({ isDialogBoxOpen: true });
  }

  checkMember = () => {
    const { isMember } = this.state;

    if (isMember) {
      this.setState({
        enrollmentId: '',
        isMember: false,
      });
    } else {
      this.setState({ isDialogBoxOpen: true });
    }
  }

  handleAgreeDialogBox = () => {
    const { snackBarStateUpdater } = this.props;
    const isValid = this.handleIsValid();

    if (isValid) {
      // snackBarStateUpdater({
      //   showSnackBar: true,
      //   variant: successVariant,
      //   snackBarMsg: 'Successfully Submit',
      // });
      this.handleSubmitData();
    } else {
      snackBarStateUpdater({
        showSnackBar: true,
        variant: errorVariant,
        snackBarMsg: 'Please Fill Required Field',
      });
    }
  }

  handleSubmitData = () => {
    const { enrollmentId } = this.state;
    const { snackBarStateUpdater, incidentDetailData } = this.props;
    let payload = new FormData();

    payload.append('placeOfIncident', incidentDetailData.placeOfIncident);
    payload.append('dateTimeIncident', incidentDetailData.dateTimeIncident);
    payload.append('summary', incidentDetailData.summary);
    payload.append('attachment', incidentDetailData.attachment);

    connection(API_METHOD.post, `${SERVER_ROUTE.grievance}/${enrollmentId}`, payload)
    .then(res => {
      const { reset } = this.props;

      snackBarStateUpdater({
        showSnackBar: true,
        variant: successVariant,
        snackBarMsg: res.data.message,
      })
      this.setState({
        grievanceId: res.data.data.originalId,
        enrollmentId: '',
        isDialogBoxOpen: false,
        isMember: false,
        icon: 'none',
        dialogBoxTitle: 'Grievance Form',
      }, reset(RESET_TYPE.all));
    })
    .catch(error => { 
      snackBarStateUpdater({
        showSnackBar: true,
        variant: errorVariant,
        snackBarMsg: error.message, 
      });
    });
  }

  handleDisagreeDialogBox = () => {
    const { reset } = this.props;

    this.setState({
      enrollmentId: '',
      isDialogBoxOpen: false,
      isMember: false,
      icon: 'none',
      dialogBoxTitle: 'Grievance Form',
    }, reset(RESET_TYPE.all));
  }

  handleCheckMember = () => {
    const { enrollmentId } = this.state;

    if (enrollmentId) {
      const { snackBarStateUpdater } = this.props;

      connection(API_METHOD.get, `${SERVER_ROUTE.enrollment}/${enrollmentId}`)
      .then(res => {
        console.log('response issss ', res);
        this.setState({
          // isDialogBoxOpen: false,
          enrollmentName: res.data.data.name,
          dialogBoxTitle: `Grievance Form | ${res.data.data.name}`,
          isMember: true,
          icon: true,
        });
      })
      .catch(error => {
        snackBarStateUpdater({
          showSnackBar: true,
          variant: errorVariant,
          snackBarMsg: 'Enrollment ID does not exist',
        });

        this.setState({
          icon: false,
          isMember: false,
        });
      });
    } else {
      this.setState({
        isDialogBoxOpen: false,
        isMember: false,
      });
    }
  }

  handleEnrollmentId = e => {
    const { reset } = this.props;

    this.setState({
      enrollmentId: e.target.value,
      enrollmentName: '',
      isMember: false,
      icon: 'none',
      dialogBoxTitle: 'Grievance Form',
    }, reset(RESET_TYPE.all))
  }

  handleIsValid = () => {
    const { incidentDetailData } = this.props;
    const options = { abortEarly: false }

    return incidentDetailSchema.isValidSync({ ...incidentDetailData }, options);
  }

  render() {
    const { isMember, isDialogBoxOpen, enrollmentId, icon, grievanceId } = this.state;
    const { classes } = this.props;

    return (
      <>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
          onClick={this.handleOpenSearchDialogBox}
        >
          <AssignmentIcon className={classes.extendedIcon} />
          Registered Member Lodge Here!
        </Fab>

        {grievanceId && (
          <DialogBox
            open={true}
            title={this.state.dialogBoxTitle}
            agreeButtonLabel='Okay'
            agreeButtonAction={() => {this.setState({
              enrollmentId: '',
              isDialogBoxOpen: false,
              isMember: false,
              icon: 'none',
              grievanceId: '',
              dialogBoxTitle: 'Grievance Form',
            })}}
          >
            <Typography>Your Grievance ID is {grievanceId}</Typography>
          </DialogBox>
        )}

        <DialogBox
          open={isDialogBoxOpen}
          title={this.state.dialogBoxTitle}
          agreeButtonLabel='Submit Form'
          disagreeButtonLabel='Cancel'
          agreeButtonAction={this.handleAgreeDialogBox}
          disagreeButtonAction={this.handleDisagreeDialogBox}
          disableAgreeButton={!isMember}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id="enrollmentId"
              label="Enrollment Id"
              value={enrollmentId}
              fullWidth
              margin="dense"
              className={classes.field}
              onChange={this.handleEnrollmentId}
            />

            {icon !== 'none' && ( icon ? <CheckCircleIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'red' }} />)}
          </div>

          <Button
            variant="contained"
            onClick={this.handleCheckMember}
          >
            Check Enrollment ID
          </Button>

          {isMember && (
            <IncidentDetail
              onChange={this.props.onChange}
              data={this.props.incidentDetailData}
            />
          )}
        </DialogBox>
      </>
    );
  }
}

export default withStyles(style)(FormForMember);
