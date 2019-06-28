import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import _ from 'lodash';

import styles from './style';
import { routes } from '../../cms';

const primary = '#254260';
const secondary = '#a9502c';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: {},
    };
  }

  componentDidMount = () => {
    let activeButton = _.camelCase(
      window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    );

    if (activeButton === '') {
      activeButton = 'home';
    }

    this.setState({
      active: {
        [activeButton]: {
          backgroundColor: secondary
        }
      }
    });
  };

    

  render() {
    const { classes } = this.props;
    const { active } = this.state;
    const { path } = routes;

    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <Link>
            <li
              className={classes.li}
              style={{ ...active.home }}
              onMouseEnter={this}
            >
              <Typography className={classes.text}>Home</Typography>
              <ul className={classes.ul_li_ul}>
                <Link to={path.board.central.home}>
                  <li className={classes.ul_li_ul_li}>
                    <Typography className={classes.text}>Central Board</Typography>
                  </li>
                </Link>
                <Link to={path.board.central.protector}>
                  <li className={classes.ul_li_ul_li}>
                    <Typography className={classes.text}>Central Protector Board</Typography>
                  </li>
                </Link>
              </ul>
            </li>
          </Link>
          <Link>
            <li className={classes.li} style={{ ...active.hamid }}>
              <Typography className={classes.text}>Hamid</Typography>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(NavBar);
