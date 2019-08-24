import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';

import { routes } from '../../../../../cms';
import styles from './style';


class NavBarDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      activeNav: '',
      activeNavList: '',
    };
  }

  componentDidMount = () => {
    // let nav = _.camelCase(
    //   window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    // );
    let nav = window.location.href.split('/')[3];

    if (nav === '') nav = 'home';
    console.log('navvv is ', window.location);
    this.handleNavClick(nav)();
  };

  handleNavClick = nav => () => {
    this.setState({activeNav: nav});
  }

  handleNavHover = navList => () => {
    this.setState({activeNavList: navList});
  }

  getActiveNavStyle = nav => {
    const { classes } = this.props;
    const { activeNav } = this.state;
    
    if (activeNav === nav) {
      return classes.active;
    }

    return '';
  }

  getActiveNavListStyle = navList => {
    const { classes } = this.props;
    const { activeNavList } = this.state;

    if (activeNavList === navList) {
      return classes.showList;
    }

    return classes.hideList;
  }

  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {routes.map((nav) => {
            if (nav.show === true || nav.show === undefined) {
              if (nav.children) {
                return (
                  <li
                    className={classNames(classes.li, this.getActiveNavStyle(nav.value))}
                    onClick={this.handleNavClick(nav.value)}
                    onMouseEnter={this.handleNavHover(nav.path)}
                    onMouseLeave={this.handleNavHover('')}
                  >
                    <Typography className={classes.text}>{nav.label}</Typography>
                    <ul className={classNames(classes.ul_li_ul, this.getActiveNavListStyle(nav.path))}>
                      {nav.children.map((navChildren) => {
                        if (navChildren.show === true || navChildren.show === undefined) {
                          if (navChildren.external) {
                            return (
                              <li
                                className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle(navChildren.value))}
                                onClick={() => {window.open(navChildren.path, '_blank')}}
                              >
                                <Typography className={classes.text}>{navChildren.label}</Typography>
                              </li>
                            )
                          }
    
                          return (
                            <Link to={navChildren.path}>
                              <li className={classNames(classes.ul_li_ul_li, this.getActiveNavStyle(navChildren.value))}>
                                <Typography className={classes.text}>{navChildren.label}</Typography>
                              </li>
                            </Link>
                          )
                        }

                        return null;
                      })}
                    </ul>
                  </li>
                )
              }
  
              return (
                <Link to={nav.path}>
                  <li
                    className={classNames(classes.li, this.getActiveNavStyle(nav.value))}
                    onClick={this.handleNavClick(nav.value)}
                  >
                    <Typography className={classes.text}>{nav.label}</Typography>
                  </li>
                </Link>
              )
            }

            return null;
          })}
        </ul>
      </nav>
    );
  }
}

NavBarDesktop.propTypes = {
  classes: PropTypes.object.isRequired,
}

NavBarDesktop.defaultProps = {
  classes: {},
}

export default withStyles(styles)(NavBarDesktop);
