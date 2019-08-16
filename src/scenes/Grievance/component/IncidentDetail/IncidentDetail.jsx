import React, { Component } from 'react';
import {
  withStyles,
  TextField,
  Input,
} from '@material-ui/core';

// import {
//   CommunicationDetailDefaultProps,
//   CommunicationDetailPropTypes
// } from '../../../../lib/utils/props';
import styles from './style';

class IncidentDetail extends Component {
  handleChange = field => e => {
    this.props.onChange(field, e.target.value);
  }

  render() {
    const {
      classes,
      placeOfIncident,
      dateTimeIncident,
      summary,
    } = this.props;

    return (
      <>
        <div className={classes.row} style={{ padding: '10px 0px' }}>
          <TextField
            id="placeOfIncident"
            label="Place of Incident"
            value={placeOfIncident}
            onChange={this.handleChange('placeOfIncident')}
            className={classes.padding}
            fullWidth
          />

          <TextField
            id="dateTimeIncident"
            label="Date and Time of Incident"
            value={dateTimeIncident}
            type="date"
            fullWidth
            className={classes.padding}
            onChange={this.handleChange('dateTimeIncident')}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>

        <TextField
          id="summary"
          label="Content of Complaints"
          multiline
          value={summary}
          onChange={this.handleChange('summary')}
          margin="dense"
        />

        <Input
          id="attachment"
          type="file"
          name="attachment"
          classes={{ input: classes.attachment, root: classes.attachment }}
          // onChange={event => this.onChange(event)}
          inputProps={{ accept : ['.jpg', '.jpeg', '.png'] }}
          // inputRef={this.fileInput}
        />
      </>
    );
  }
}

// PersonalDetail.defaultProps = CommunicationDetailDefaultProps;
// PersonalDetail.propTypes = CommunicationDetailPropTypes;

export default withStyles(styles)(IncidentDetail);
