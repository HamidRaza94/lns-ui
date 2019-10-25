import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, TextField, Button, Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import styles from '../style';
import { incidentDetail } from '../../../cms';
import { bytesToSize } from '../../../libs/utils/helpers'

class IncidentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attachment: '',
      attachmentPreview: null,
    }
  }

  static getDerivedStateFromProps({ data: { attachment } }) {
    if (attachment) {
      return {
        attachment: (attachment.name + ` (${bytesToSize(attachment.size)})`),
        attachmentPreview: URL.createObjectURL(attachment),
      }
    }

  }

  handleChange = field => e => {
    this.props.onChange('incidentDetailData', field, e.target.value);
  }

  handleFileChange = field => e => {
    this.setState({ [field]: (e.target.files[0].name + ` (${bytesToSize(e.target.files[0].size)})`) });
    this.props.onChange('incidentDetailData', field, e.target.files[0]);
  }

  handleDateChange = field => date => {
    this.props.onChange('incidentDetailData', field, date);
  }

  render() {
    const { attachment, attachmentPreview } = this.state;
    const {
      classes,
      data: {
        placeOfIncident,
        dateTimeIncident,
        summary,
      },
    } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="placeOfIncident"
          label={incidentDetail.placeOfIncident.label}
          value={placeOfIncident}
          onChange={this.handleChange('placeOfIncident')}
          className={classes.field}
          fullWidth
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            label={incidentDetail.dateTimeIncident.label}
            value={dateTimeIncident}
            disableFuture
            clearable
            fullWidth
            className={classes.field}
            onChange={this.handleDateChange('dateTimeIncident')}
          />
        </MuiPickersUtilsProvider>

        <TextField
          id="summary"
          label={incidentDetail.summary.label}
          value={summary}
          multiline
          rows="5"
          fullWidth
          className={classes.multiline}
          onChange={this.handleChange('summary')}
        />

        <div className={classes.imageDiv}>
          <Button variant="contained" component="label" style={{ marginRight: 10 }}>
            {incidentDetail.attachment.label}
            <input type="file" onChange={this.handleFileChange('attachment')} style={{ display: "none" }} />
          </Button>

          <Typography>{attachment}</Typography>

          {attachmentPreview && <img alt="Pic" src={attachmentPreview} width={100} heigh={100} />}
        </div>

        <Typography style={{ padding: 5 }}>{incidentDetail.attachment.message}</Typography>
      </div>
    );
  }
}

IncidentDetail.propTypes = {
  IncidentDetail: PropTypes.string.isRequired,
  dateTimeIncident: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  attachment: PropTypes.object.isRequired,
}

IncidentDetail.defaultProps = {
  IncidentDetail: '',
  dateTimeIncident: null,
  summary: '',
  attachment: null,
}

export default withStyles(styles)(IncidentDetail);
