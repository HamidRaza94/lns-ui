import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class PaymentDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentStatus: false,
    }
  }

  render() {
    const { paymentStatus } = this.state;

    return (
      paymentStatus ? (
        <Typography>Payment is Successful</Typography>
      ) : (
        <Typography>Payment Gateway is not configured!!! <br /> Please contact with administration</Typography>
      )
    )
  }
}

export default PaymentDetail;
