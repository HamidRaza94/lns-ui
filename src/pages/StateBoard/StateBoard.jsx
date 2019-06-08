import React, { Component } from 'react';
import { withStyles, Select, MenuItem } from '@material-ui/core';

import styles from './style';
import { STATES } from '../../config';
import { Table } from '../../components';

function createData(name, state, contact) {
  return { name, state, contact };
}

const rows = [
  createData('Hamid', 'Delhi', 1),
  createData('Hamid', 'Delhi', 2),
  createData('Hamid', 'Bihar', 3),
  createData('Hamid', 'Bihar', 4),
  createData('Hamid', 'Bihar', 5),
  createData('Hamid', 'Bihar', 6),
  createData('Hamid', 'Goa', 7),
  createData('Hamid', 'Goa', 8),
  createData('Hamid', 'Goa', 9),
  createData('Hamid', 'Goa', 10),
  createData('Hamid', 'Goa', 11),
  createData('Hamid', 'Goa', 12),
  createData('Hamid', 'Haryana', 13),
  createData('Hamid', 'Haryana', 14),
  createData('Hamid', 'Haryana', 15),
  createData('Hamid', 'Haryana', 16),
  createData('Hamid', 'Haryana', 17),
  createData('Hamid', 'Haryana', 18),
  createData('Hamid', 'Haryana', 19)
];

class StateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
      stateBoard: rows
    };
  }

  handleChangeState = event => {
    const currentState = event.target.value;
    let currentStateBoard;

    if (currentState === '') {
      currentStateBoard = rows;
    } else {
      currentStateBoard = rows.filter(row => row.state === currentState);
    }

    this.setState({
      state: currentState,
      stateBoard: currentStateBoard
    });
  };

  render() {
    const { state, stateBoard } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.state}>
          <Select
            value={state}
            onChange={this.handleChangeState}
            displayEmpty
            name="state"
            className={classes.select}
          >
            <MenuItem value="">
              <em>Select State</em>
            </MenuItem>
            {STATES.map(state => (
              <MenuItem value={state}>{state}</MenuItem>
            ))}
          </Select>
        </div>

        <Table data={stateBoard} head={['name', 'state', 'contact']} />
      </div>
    );
  }
}

export default withStyles(styles)(StateBoard);
