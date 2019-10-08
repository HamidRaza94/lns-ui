import React, { Component } from 'react';
import { withStyles, Fab, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import style from '../FormForMember/style';
import { DialogBox } from '../../../../components';

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

  }

  handleAgreeDialogBox = () => {
    this.setState({ isDialogBoxOpen: false });
  }

  handleDisagreeDialogBox = () => {
    this.setState({ isDialogBoxOpen: false });
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

          <Typography>Incident Detail: {IncidentDetail}</Typography>
          <Typography>Date and Time of Incident: {dateTimeIncident}</Typography>
          <Typography>Summary: {summary}</Typography>
          <Typography>Attachment: {attachment}</Typography>
        </DialogBox>
      </>
    )
  }
}

export default withStyles(style)(SearchGrievance);
