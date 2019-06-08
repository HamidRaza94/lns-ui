import React, { Component } from 'react';
import { withStyles, TextField } from '@material-ui/core';
import _ from 'lodash';

import styles from './style';
import { Table } from '../../components';

function createData(enrollmentId, name, fatherHusbandName, address) {
  return { enrollmentId, name, fatherHusbandName, address };
}

const rows = [
  createData(
    '1/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '2/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '3/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '4/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '5/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '6/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '7/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '8/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '9/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '10/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '11/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '12/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '13/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '14/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '15/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '16/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '17/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '18/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '19/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '20/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '21/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '22/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '23/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  ),
  createData(
    '24/2010',
    'Saista',
    'Naseem Saifi',
    'L II - 1358/27 SANGAM VIHAR NEW DELHI - 110080'
  )
];

class Volunteers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteers: rows
    };
  }

  handleChangeId = event => {
    const volunteers = rows.filter(volunteer =>
      volunteer.enrollmentId.includes(event.target.value)
    );

    this.setState({
      volunteers
    });
  };

  render() {
    const { volunteers } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.search}>
          <TextField
            id="outlined-search"
            label="Enter Enrollment ID"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChangeId}
          />
        </div>

        <Table
          data={volunteers}
          head={['enrollmentId', 'name', 'fatherHusbandName', 'address']}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Volunteers);
