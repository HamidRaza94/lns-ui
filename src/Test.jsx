import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubItem = () => {
    this.setState({
      
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Typography className={classes.text}>Home</Typography>
          </li>
          <li className={classes.li}>
            <Typography className={classes.text}>Home</Typography>
          </li>
          <li className={classes.li}>
            <Typography className={classes.text}>Home</Typography>
          </li>
          <li
            className={classes.li}
            onMouseEnter={this.handleSubItem}
            onMouseLeave={this.handleSubItem}
          >
            <Typography className={classes.text}>Home</Typography>
            <ul className={classes.ul_li_ul}>
              <li className={classes.ul_li_ul_li}>
                <Typography className={classes.text}>Home</Typography>
              </li>
              <li className={classes.ul_li_ul_li}>
                <Typography className={classes.text}>Home</Typography>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(Test);
