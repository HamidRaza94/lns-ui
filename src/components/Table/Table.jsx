import React, { Component } from 'react';
import {
  withStyles,
  Table as T,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@material-ui/core';

import styles from './style';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 5,
      page: 0
    };
  }

  componentWillReceiveProps = () => {
    this.setState({
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
    const { rowsPerPage, page } = this.state;
    const { classes, title, data, head } = this.props;

    return (
      <Paper className={classes.paper}>
        <T className={classes.table}>
          <TableHead>
            <TableRow>
              {title.map(item => (
                <TableCell className={classes.tableCell}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length ? (
              data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow>
                    {head.map(item => (
                      <TableCell component="th" scope="row">
                        {row[item]}
                      </TableCell>
                    ))}
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
        </T>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{ 'aria-label': 'Previous Page' }}
          nextIconButtonProps={{ 'aria-label': 'Next Page' }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Table);
