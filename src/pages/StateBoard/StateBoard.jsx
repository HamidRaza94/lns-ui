import React, { Component } from 'react';
import {
  withStyles,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@material-ui/core';

import styles from './style';
import { STATES } from '../../config';

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
      stateBoard: rows,
      rowsPerPage: 5,
      page: 0
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
      stateBoard: currentStateBoard,
      page: 0
    });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      rowsPerPage: event.target.value
    });
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage
    });
  };

  render() {
    const { state, stateBoard, rowsPerPage, page } = this.state;
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

        <Paper className={classes.stateBoard}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stateBoard.length ? (
                stateBoard
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.state}</TableCell>
                      <TableCell align="right">{row.contact}</TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow key="unknown">
                  <TableCell component="th" scope="row">
                    No Data Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={stateBoard.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{ 'aria-label': 'Previous Page' }}
            nextIconButtonProps={{ 'aria-label': 'Next Page' }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(StateBoard);
