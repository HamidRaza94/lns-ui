import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import 'rc-menu/assets/index.css';
import Menu, { SubMenu, MenuItem } from 'rc-menu';

import { routes } from '../../../cms';
import styles from './style';
import './styles.css';

const useStyles = makeStyles(styles);

const NavBar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const classes = useStyles();
  const [hoveredMenu, setHoveredMenu] = useState('');

  const activeSubMenu = pathname.split('/')[1];

  const handleNavClick = (path, external) => () => {
    if (external) {
      window.open(path, '_blank');

      return null;
    }

    history.push(path);
  };

  return (
    <Menu
      mode="horizontal"
      openAnimation="slide-up"
      className={classes.menu}
    >
      {routes.map(({ path, label, value, children, external }) => !children ? (
        <MenuItem
          key={value}
          className={classNames(classes.menuItem, pathname === path ? classes.active : '')}
          onClick={handleNavClick(path, external)}
        >
          {label}
        </MenuItem>
      ) : (
        <SubMenu
          key={value}
          title={label}
          className={classNames(classes.menuItem, classes.subMenu, (hoveredMenu === value || activeSubMenu === value) ? classes.active : '')}
        >
          {children.map(({ path: subPath, label: subLabel, value: subValue, external: subExternal }) => (
            <MenuItem
              key={subValue}
              className={classNames(classes.menuItem, classes.subMenuItem, pathname === subPath ? classes.active : '')}
              onMouseEnter={() => setHoveredMenu(value)}
              onMouseLeave={() => setHoveredMenu('')}
              onClick={handleNavClick(subPath, subExternal)}
            >
              {subLabel}
            </MenuItem>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
}

export default NavBar;
