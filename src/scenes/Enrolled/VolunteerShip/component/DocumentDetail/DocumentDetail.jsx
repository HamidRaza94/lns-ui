import React, { Component } from 'react';
import { withStyles, TextField } from '@material-ui/core';

// import {
//   DocumentDetailDefaultProps,
//   DocumentDetailPropTypes
// } from '../../../../lib/utils/props';
import styles from './style';

class DocumentDetail extends Component {
  handleChange = field => e => {
    this.props.onChange(field, e.target.value);
  }

  render() {
    const {
      classes,
      aadhaar,
      pan,
    } = this.props;

    return (
      <>
        <TextField
          id="aadhaar"
          label="Aadhar"
          value={aadhaar}
          onChange={this.handleChange('aadhaar')}
          type="number"
          margin="dense"
        />

        <TextField
          id="pan"
          label="PAN"
          value={pan}
          margin="dense"
          onChange={this.handleChange('pan')}
        />
      </>
    );
  }
}

// PersonalDetail.defaultProps = DocumentDetailDefaultProps;
// PersonalDetail.propTypes = DocumentDetailPropTypes;

export default withStyles(styles)(DocumentDetail);
