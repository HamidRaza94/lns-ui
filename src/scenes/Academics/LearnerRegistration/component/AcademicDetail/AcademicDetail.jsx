import React, { Component } from 'react';
import { withStyles, TextField } from '@material-ui/core';

import styles from './style';

class DocumentDetail extends Component {
  handleChange = field => e => {
    this.props.onChange(field, e.target.value);
  }

  render() {
    const {
      // classes,
      // academicCenter,
      // courseName,
      academicShift,
    } = this.props;

    return (
      <>
        <TextField
          id="shift"
          label="Academic Shift"
          value={academicShift}
          onChange={this.handleChange('academicShift')}
          type="number"
          margin="dense"
        />
      </>
    );
  }
}

// PersonalDetail.defaultProps = DocumentDetailDefaultProps;
// PersonalDetail.propTypes = DocumentDetailPropTypes;

export default withStyles(styles)(DocumentDetail);
