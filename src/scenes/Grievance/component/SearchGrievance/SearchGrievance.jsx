import React, { Component } from 'react';
import { withStyles, Fab, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import style from '../FormForMember/style';
import { DialogBox } from '../../../../components';
import { connection } from '../../../../lib/server';
import { API_METHOD, SERVER_ROUTE } from '../../../../lib/extra/constants';

class SearchGrievance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDialogBoxOpen: false,
      grievanceId: '',
      IncidentDetail: '',
      dateTimeIncident: null,
      summary: '',
      attachment: null,
    }
  }

  handleOpenSearchDialogBox = () => {
    this.setState({ isDialogBoxOpen: true });
  }

  handleChange = e => {
    this.setState({ grievanceId: e.target.value });
  }

  handleFetchGrievance = () => {
    const { grievanceId } = this.state;
    const { snackBarStateUpdater } = this.props;

    if (grievanceId) {
      connection(API_METHOD.get, `${SERVER_ROUTE.grievance}/${grievanceId}`).then((res) => {
        console.log('res is ', res);
        this.setState({
          IncidentDetail: res.data.data.placeOfIncident,
          dateTimeIncident: res.data.data.dateTimeIncident,
          summary: res.data.data.summary,
          // attachment: res.data.data.attachment,
        });
        snackBarStateUpdater({
          showSnackBar: true,
          variant: 'success',
          snackBarMsg: 'Successfully Fetch Grievance Data',
        });
      }).catch((err) => {
        console.log('err is ', err);
      })
    } else {
      snackBarStateUpdater({
        showSnackBar: true,
        variant: 'error',
        snackBarMsg: 'Please Enter Grievance ID',
      });
    }
  }

  handleAgreeDialogBox = () => {
    this.setState({
      isDialogBoxOpen: false,
      grievanceId: '',
      IncidentDetail: '',
      dateTimeIncident: null,
      summary: '',
      attachment: null,
    });
  }

  render() {
    const { classes } = this.props;
    const {
      isDialogBoxOpen,
      grievanceId,
      IncidentDetail,
      dateTimeIncident,
      summary,
      attachment,
    } = this.state;

    return (
      <>
        <Fab
          onClick={this.handleOpenSearchDialogBox}
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <SearchIcon className={classes.extendedIcon} />
          Search Your Complaint
        </Fab>

        <DialogBox
          open={isDialogBoxOpen}
          title="Search Lodged Grievance"
          disableDisagreeButton={true}
          agreeButtonLabel='Okay'
          agreeButtonAction={this.handleAgreeDialogBox}
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <TextField
              id="grievanceId"
              label="Grievance ID"
              value={grievanceId}
              fullWidth
              margin="dense"
              className={classes.field}
              onChange={this.handleChange}
            />
            <Fab
              onClick={this.handleFetchGrievance}
              variant="extended"
              color="primary"
              aria-label="add"
              className={classes.margin}
              disabled={grievanceId ? false : true}
            >
              <SearchIcon className={classes.extendedIcon} />
              Search
            </Fab>
          </div>

          <Typography>Incident Detail: <b>{IncidentDetail}</b></Typography>
          <Typography>Date and Time of Incident: <b>{dateTimeIncident}</b></Typography>
          <Typography>Summary: <b>{summary}</b></Typography>
          <Typography>Attachment: <b>{attachment}</b></Typography>
        </DialogBox>
      </>
    )
  }
}

export default withStyles(style)(SearchGrievance);
