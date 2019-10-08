import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, SwipeableDrawer } from '@material-ui/core';

import styles from './style';
import { NavBarItem } from './components';

class AppBarHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false,
      activeNav: window.location.pathname,
      activeNavList: '',
    }
  }

  toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ ...this.state, openDrawer: open });
  };

  render() {
    const { classes } = this.props;
    const { openDrawer } = this.state;

    return (
      <div className={classes.root}>
        <Typography onClick={this.toggleDrawer(true)} className={classes.menuButton}>Menu</Typography>
        <SwipeableDrawer
          open={openDrawer}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <NavBarItem toggle={this.toggleDrawer} />
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

AppBarHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarHeader);
