import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import classNames from 'classnames';

import styles from './style';
import { routes } from '../../../../../../../cms';

const icons = {
  home: <HomeIcon />,
}

class NavBarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNav: window.location.pathname,
    }
  }

  handleActiveNav = nav => () => {
    this.setState({activeNav: nav});
  }

  getActiveNavStyle = nav => this.state.activeNav === nav ? this.props.classes.active : ''

  getIcon = (iconName) => icons[iconName]

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.list}>
        <List>
          {routes.map(nav => nav.children ? ((nav.show === true || nav.show === undefined) ? (
            <Fragment>
              <Link to={nav.path} className={classes.link}>
                <ListItem className={classNames(classes.nav)} button>
                  {nav.icon && (
                    <ListItemIcon>
                      {this.getIcon(nav.icon)}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={nav.label} />
                </ListItem>
              </Link>
              {nav.children.map(navChildren => ((navChildren.show === true || navChildren.show === undefined) ? (
                navChildren.external ? (
                  <ListItem className={classNames(classes.navChildren, this.getActiveNavStyle(navChildren.path))} button>
                    {nav.icon && (
                      <ListItemIcon>
                        {this.getIcon(nav.icon)}
                      </ListItemIcon>
                    )}
                    <ListItemText primary={navChildren.label} onClick={() => {window.open(navChildren.path, '_blank')}} />
                  </ListItem>
                ) : (
                  <Link to={navChildren.path} className={classes.link}>
                    <ListItem className={classNames(classes.navChildren, this.getActiveNavStyle(navChildren.path))} button>
                    {nav.icon && (
                      <ListItemIcon>
                        {this.getIcon(nav.icon)}
                      </ListItemIcon>
                    )}
                      <ListItemText primary={navChildren.label} />
                    </ListItem>
                  </Link>
                )
              ) : null ))}
            </Fragment>) : null
          ) : ((nav.show === true || nav.show === undefined) ? (
            <Link to={nav.path} className={classes.link}>
              <ListItem className={classNames(classes.nav, this.getActiveNavStyle(nav.path))} button>
                {nav.icon && (
                  <ListItemIcon>
                    {this.getIcon(nav.icon)}
                  </ListItemIcon>
                )}
                <ListItemText className={classes.navItem} primary={nav.label} />
              </ListItem>
            </Link>) : null
          ))}
        </List>
      </div>
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
};

export default withStyles(styles)(NavBarItem);
