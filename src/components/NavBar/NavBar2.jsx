import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './style2';
import { Button } from '../Button';
import { NAV_BAR_FOLDER } from '../../config';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBarLogo: 'Home'
    };
  }

  handleChangeNavBarLogo = logo => () => {
    this.setState({
      navBarLogo: logo
    });
  };

  render() {
    const { navBarLogo } = this.state;
    const { classes, style } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.imageRoot}>
          <img
            src={`${NAV_BAR_FOLDER}/${navBarLogo}.png`}
            alt=""
            className={classes.image}
            style={{ ...style.image }}
          />
        </div>
        <div className={classes.buttonRoot}>
          <Button
            value="Home"
            className={classes.button}
            style={{ ...style.button }}
            onClick={this.handleChangeNavBarLogo('Home')}
          />
          <Button
            value="Team"
            className={classes.button}
            style={{ ...style.button }}
            onClick={this.handleChangeNavBarLogo('Team')}
          />
          <Button
            value="Membership"
            className={classes.button}
            style={{ ...style.button }}
            onClick={this.handleChangeNavBarLogo('Membership')}
          />
          <Button
            value="Members"
            className={classes.button}
            style={{ ...style.button }}
            onClick={this.handleChangeNavBarLogo('Members')}
          />
          <Button
            value="Complaints"
            className={classes.button}
            style={{ ...style.button }}
            onClick={this.handleChangeNavBarLogo('Complaints')}
          />
          <Button
            value="Donate"
            className={classes.button}
            style={{ ...style.button }}
            onClick={this.handleChangeNavBarLogo('Donate')}
          />
          <Button
            value="Contact"
            className={classes.button}
            style={{ ...style.button }}
            onClick={this.handleChangeNavBarLogo('Contact')}
          />
        </div>
      </div>
    );
  }
}

NavBar.defaultProps = {
  style: {}
};

NavBar.propTypes = {
  style: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(NavBar);
