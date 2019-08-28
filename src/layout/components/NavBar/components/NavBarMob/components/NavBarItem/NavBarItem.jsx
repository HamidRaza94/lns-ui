import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';

import styles from './style';
import { routes } from '../../../../../../../cms';

const icons = {
  home: <HomeIcon />,
}

class NavBarItem extends Component {
  constructor(props) {
    super(props);

    const checkParent = window.location.pathname.split('/');
    let x;
    if (checkParent.length > 1) {
      x = checkParent[1];
    }

    this.state = {
      activeNav: window.location.pathname,
      activeNavList: '',
      isExpand: x,
      isParent: x,
    }
  }

  getOrangeTextColor = nav => {
    const { activeNav, isParent } = this.state;

    if (activeNav === nav || isParent === nav) {
      return this.props.classes.activeChildren;
    }

    return '';
  }

  getWhiteTextColor = nav => {
    const { activeNav, isParent } = this.state;
    const { classes } = this.props;

    if (activeNav === nav || isParent === nav) {
      return classes.activeText;
    }

    return '';
  }

  getActiveNavStyle = (nav) => {
    const { activeNav, isParent } = this.state;
    const { classes } = this.props;

    if (activeNav === nav || isParent === nav) {
      return classes.active;
    }

    return '';
  }

  getActiveNavListStyle = (nav, navList) => {
    const { activeNav } = this.state;

    if (activeNav === navList) {
      return this.props.classes.activeChildren;
    }

    return '';
  }

  getIcon = iconName => icons[iconName]

  getActiveList = (navList) => {
    const { isParent } = this.state;
    const { classes } = this.props;

    if (isParent === navList) {
      return classes.showList;
    }

    return classes.navChildren;
  }

  showActiveList = (nav) => {
    const { isExpand } = this.state;
    const { classes } = this.props;

    if (isExpand === nav) {
      return classes.showList
    }

    return null;
  }

  render() {
    const { classes, toggle } = this.props;
    const { isExpand, activeNav, isParent } = this.state;

    return (
      <List className={classes.list}>
        {routes.map(nav => nav.children ? ((nav.show === true || nav.show === undefined) ? (
          <Fragment>
            <ListItem
              button
              key={nav.label}
              onClick={() => {this.setState({ isExpand: nav.value }, toggle(true))}}
              className={classNames(this.getActiveNavStyle(nav.value), classes.hover)}
            >
              {nav.icon && <ListItemIcon>{this.getIcon(nav.icon)}</ListItemIcon>}
              <ListItemText
                primary={nav.label}
                classes={{ primary: this.getWhiteTextColor(nav.value) }}
              />
              {isExpand === nav.value ? <ExpandLessIcon className={classes.expand} /> : <ExpandMoreIcon />}
            </ListItem>
            {nav.children.map(navChildren => ((navChildren.show === true || navChildren.show === undefined) ? (
              navChildren.external ? (
                <ListItem
                  button
                  key={nav.label}
                  onClick={toggle(false)}
                  className={classNames(classes.navChildren, classes.hover, this.showActiveList(nav.value))}
                >
                  {nav.icon && <ListItemIcon>{this.getIcon(nav.icon)}</ListItemIcon>}
                  <ListItemText primary={navChildren.label} onClick={() => {window.open(navChildren.path, '_blank')}} />
                </ListItem>
              ) : (
                <Link to={navChildren.path} className={classes.link}>
                  <ListItem
                    button
                    key={nav.label}
                    onClick={toggle(false)}
                    className={classNames(classes.navChildren, activeNav === navChildren.path ? null : classes.hover, this.showActiveList(nav.value))}
                  >
                    {nav.icon && <ListItemIcon>{this.getIcon(nav.icon)}</ListItemIcon>}
                    <ListItemText
                      primary={navChildren.label}
                      classes={{ primary: this.getOrangeTextColor(navChildren.path) }}
                    />
                  </ListItem>
                </Link>
              )
            ) : null ))}
          </Fragment>) : null
        ) : ((nav.show === true || nav.show === undefined) ? (
          <Link to={nav.path} className={classes.link}>
            <ListItem
              button
              key={nav.label}
              onClick={toggle(false)}
              className={classNames(this.getActiveNavStyle(nav.path), classes.hover)}
            >
              {nav.icon && <ListItemIcon>{this.getIcon(nav.icon)}</ListItemIcon>}
              <ListItemText
                primary={nav.label}
                classes={{ primary: this.getWhiteTextColor(nav.path) }}
              />
            </ListItem>
          </Link>) : null
        ))}
      </List>
    );
  }
}

/*
<ListItemIcon> import { ListItemIcon } from '@material-ui/core'
  <InboxIcon /> import InboxIcon from '@material-ui/icons/MoveToInbox';
</ListItemIcon>
*/

NavBarItem.propTypes = {
  classes: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavBarItem);
