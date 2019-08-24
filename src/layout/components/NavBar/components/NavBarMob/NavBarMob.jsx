import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
} from '@material-ui/core';

import { NavBarItem } from './components';
import styles from './style';

class AppBarHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    }
  }

  handleMenu = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <div className={classes.root} onClick={this.handleMenu}>
        <AppBar
          className={classes.appBar}
          position="static"
          onLeftIconButtonTouchTap={this.handleMenu}
        >
          <Toolbar className={classes.toolbar} variant="dense">
            <Typography className={classes.menuButton}>Menu</Typography>
            <Drawer open={drawerOpen} onClose={this.handleMenu}>
              <div tabIndex={0} role="button" onClick={this.handleMenu} onKeyDown={this.handleMenu}>
                <NavBarItem />
              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBarHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarHeader);
